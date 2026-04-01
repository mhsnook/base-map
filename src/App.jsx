import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import { getBaseCountsByYear, getBasesForYear, COUNTRY_COLORS } from "./data/bases";
import { oilPrices } from "./data/oil";
import "leaflet/dist/leaflet.css";

const START_YEAR = 1950;
const END_YEAR = 2026;
const MS_PER_YEAR = 100;

const yearCounts = getBaseCountsByYear();

function Timeline({ year, playing, onYearChange, onTogglePlay }) {
  const containerRef = useRef(null);

  const years = useMemo(() => {
    const arr = [];
    for (let y = START_YEAR; y <= END_YEAR; y++) arr.push(y);
    return arr;
  }, []);

  const maxTotal = useMemo(
    () => Math.max(...years.map((y) => yearCounts[y].total)),
    [years]
  );

  const maxOil = useMemo(
    () => Math.max(...years.map((y) => oilPrices[y] || 0)),
    [years]
  );

  const getX = useCallback(
    (y) => ((y - START_YEAR) / (END_YEAR - START_YEAR)) * 1000,
    []
  );

  const getY = useCallback(
    (count) => 60 - (count / maxTotal) * 52 - 4,
    [maxTotal]
  );

  const getOilY = useCallback(
    (price) => 60 - (price / maxOil) * 52 - 4,
    [maxOil]
  );

  const handleClick = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = x / rect.width;
      const y = Math.round(START_YEAR + ratio * (END_YEAR - START_YEAR));
      onYearChange(Math.max(START_YEAR, Math.min(END_YEAR, y)));
    },
    [onYearChange]
  );

  const buildLine = useCallback(
    (accessor) =>
      years
        .map((y, i) => `${i === 0 ? "M" : "L"}${getX(y)},${getY(accessor(yearCounts[y]))}`)
        .join(" "),
    [years, getX, getY]
  );

  const usLine = useMemo(() => buildLine((c) => c.usBases), [buildLine]);
  const otherLine = useMemo(() => buildLine((c) => c.otherBases), [buildLine]);
  const totalLine = useMemo(() => buildLine((c) => c.total), [buildLine]);

  const oilLine = useMemo(
    () =>
      years
        .map((y, i) => `${i === 0 ? "M" : "L"}${getX(y)},${getOilY(oilPrices[y] || 0)}`)
        .join(" "),
    [years, getX, getOilY]
  );

  const dotX = getX(year);
  const dotY = getY(yearCounts[year].total);

  return (
    <div className="timeline">
      <button className="play-btn" onClick={onTogglePlay} aria-label={playing ? "Pause" : "Play"}>
        {playing ? "❚❚" : "▶"}
      </button>
      <div className="timeline-graph" ref={containerRef} onClick={handleClick}>
        <svg viewBox="0 0 1000 60" preserveAspectRatio="none">
          <path
            d={`${totalLine} L${getX(END_YEAR)},60 L${getX(START_YEAR)},60 Z`}
            fill="rgba(255,255,255,0.03)"
          />
          <path d={oilLine} fill="none" stroke="rgba(234,179,8,0.3)" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
          <path d={otherLine} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d={usLine} fill="none" stroke="rgba(224,48,48,0.45)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d={totalLine} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <circle cx={dotX} cy={dotY} r="5" fill="#fff" vectorEffect="non-scaling-stroke" />
          <rect x={dotX} y="0" width={1000 - dotX} height="60" fill="rgba(0,0,0,0.45)" />
        </svg>
        <div className="timeline-labels">
          <span>1950</span>
          <span>1970</span>
          <span>1990</span>
          <span>2010</span>
          <span>{END_YEAR}</span>
        </div>
      </div>
      <div className="year-label">{year}</div>
    </div>
  );
}

function App() {
  const [year, setYear] = useState(END_YEAR);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setYear((prev) => {
          if (prev >= END_YEAR) {
            setPlaying(false);
            return END_YEAR;
          }
          return prev + 1;
        });
      }, MS_PER_YEAR);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const togglePlay = useCallback(() => {
    if (!playing && year === END_YEAR) {
      setYear(START_YEAR);
    }
    setPlaying((p) => !p);
  }, [playing, year]);

  const activeBases = useMemo(() => getBasesForYear(year), [year]);
  const currentCount = yearCounts[year].total;
  const prevCount = year > START_YEAR ? yearCounts[year - 1].total : currentCount;
  const nextCount = year < END_YEAR ? yearCounts[year + 1].total : currentCount;
  const prevDiff = currentCount - prevCount;
  const nextDiff = nextCount - currentCount;

  const formatDiff = (d) => (d >= 0 ? `+${d}` : `${d}`);

  return (
    <div className="app">
      <div className="header">
        <div className="counter-row">
          <span className="diff diff-prev">{year > START_YEAR ? formatDiff(prevDiff) : ""}</span>
          <span className="total-count">{currentCount}</span>
          <span className="diff diff-next">{year < END_YEAR ? formatDiff(nextDiff) : ""}</span>
        </div>
        <div className="subtitle">
          Foreign military bases worldwide, {year}
        </div>
        <div className="oil-price">
          Oil: ${Math.round(oilPrices[year] || 0)}/bbl
        </div>
      </div>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="map"
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={false}
        touchZoom={true}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png" opacity={0.35} />
        {activeBases.map((base) => (
          <CircleMarker
            key={`${base.name}-${base.country}`}
            center={[base.lat, base.lng]}
            radius={base.country === "US" ? 4.5 : 4}
            pathOptions={{
              color: "transparent",
              fillColor: COUNTRY_COLORS[base.country] || "#9ca3af",
              fillOpacity: 0.85,
            }}
          >
            <Tooltip direction="top" offset={[0, -6]} className="base-tooltip">
              <strong>{base.name}</strong>
              <br />
              {base.country} · since {base.yearOpened}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>

      <Timeline
        year={year}
        playing={playing}
        onYearChange={setYear}
        onTogglePlay={togglePlay}
      />

      <div className="legend">
        <div className="legend-item"><span className="legend-line legend-total"></span>All bases</div>
        <div className="legend-item"><span className="legend-line legend-us"></span>US bases</div>
        <div className="legend-item"><span className="legend-line legend-other"></span>Other countries</div>
        <div className="legend-item"><span className="legend-line legend-oil"></span>Oil price</div>
      </div>
    </div>
  );
}

export default App;
