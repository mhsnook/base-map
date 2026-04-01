// Foreign military bases data
// Each base has: name, country, lat, lng, yearOpened, yearClosed (null = still open)
// Sources: various academic & journalistic compilations (Vine, SIPRI, etc.)
// Country colors: US = red, others get distinct non-red colors

export const COUNTRY_COLORS = {
  US: "#e03030",
  UK: "#3b82f6",
  France: "#f59e0b",
  Russia: "#8b5cf6",
  China: "#10b981",
  Turkey: "#ec4899",
  Japan: "#06b6d4",
  India: "#84cc16",
  UAE: "#6366f1",
  Italy: "#14b8a6",
  Germany: "#f97316",
  Australia: "#0ea5e9",
  "South Korea": "#a78bfa",
  Qatar: "#22d3ee",
  Israel: "#eab308",
  Netherlands: "#2dd4bf",
  Spain: "#fb923c",
  Canada: "#818cf8",
  Djibouti: "#34d399",
  "Saudi Arabia": "#c084fc",
};

export const bases = [
  // ===== UNITED STATES =====
  // Post-WWII / Cold War era bases (1945-1950 established)
  { name: "Ramstein Air Base", country: "US", lat: 49.4369, lng: 7.6003, yearOpened: 1952, yearClosed: null },
  { name: "Yokota Air Base", country: "US", lat: 35.7485, lng: 139.3485, yearOpened: 1945, yearClosed: null },
  { name: "Kadena Air Base", country: "US", lat: 26.3516, lng: 127.7692, yearOpened: 1945, yearClosed: null },
  { name: "Camp Humphreys", country: "US", lat: 36.9628, lng: 127.0312, yearOpened: 1950, yearClosed: null },
  { name: "Osan Air Base", country: "US", lat: 37.0901, lng: 127.0296, yearOpened: 1952, yearClosed: null },
  { name: "Misawa Air Base", country: "US", lat: 40.7032, lng: 141.3686, yearOpened: 1945, yearClosed: null },
  { name: "Yokosuka Naval Base", country: "US", lat: 35.2836, lng: 139.6544, yearOpened: 1945, yearClosed: null },
  { name: "Sasebo Naval Base", country: "US", lat: 33.1583, lng: 129.7097, yearOpened: 1945, yearClosed: null },
  { name: "Camp Zama", country: "US", lat: 35.4879, lng: 139.3985, yearOpened: 1945, yearClosed: null },
  { name: "MCAS Iwakuni", country: "US", lat: 34.1437, lng: 132.2359, yearOpened: 1945, yearClosed: null },
  { name: "Camp Foster", country: "US", lat: 26.3407, lng: 127.7648, yearOpened: 1945, yearClosed: null },
  { name: "RAF Lakenheath", country: "US", lat: 52.4093, lng: 0.5609, yearOpened: 1948, yearClosed: null },
  { name: "RAF Mildenhall", country: "US", lat: 52.3614, lng: 0.4864, yearOpened: 1950, yearClosed: null },
  { name: "Aviano Air Base", country: "US", lat: 46.0319, lng: 12.5965, yearOpened: 1955, yearClosed: null },
  { name: "Naval Air Station Sigonella", country: "US", lat: 37.4017, lng: 14.9222, yearOpened: 1959, yearClosed: null },
  { name: "Naval Station Rota", country: "US", lat: 36.6413, lng: -6.3496, yearOpened: 1953, yearClosed: null },
  { name: "Incirlik Air Base", country: "US", lat: 37.0021, lng: 35.4259, yearOpened: 1954, yearClosed: null },
  { name: "Camp Lemonnier", country: "US", lat: 11.5469, lng: 43.1456, yearOpened: 2001, yearClosed: null },
  { name: "Guantanamo Bay", country: "US", lat: 19.9023, lng: -75.0961, yearOpened: 1903, yearClosed: null },
  { name: "Thule Air Base", country: "US", lat: 76.5312, lng: -68.7031, yearOpened: 1951, yearClosed: null },
  { name: "Diego Garcia", country: "US", lat: -7.3133, lng: 72.4111, yearOpened: 1971, yearClosed: null },
  { name: "Al Udeid Air Base", country: "US", lat: 25.1174, lng: 51.315, yearOpened: 2001, yearClosed: null },
  { name: "Naval Support Activity Bahrain", country: "US", lat: 26.2361, lng: 50.6511, yearOpened: 1971, yearClosed: null },
  { name: "Camp Arifjan", country: "US", lat: 28.9444, lng: 48.1031, yearOpened: 1999, yearClosed: null },
  { name: "Al Dhafra Air Base", country: "US", lat: 24.248, lng: 54.5479, yearOpened: 2001, yearClosed: null },
  { name: "Spangdahlem Air Base", country: "US", lat: 49.9725, lng: 6.6925, yearOpened: 1952, yearClosed: null },
  { name: "Grafenwöhr", country: "US", lat: 49.6983, lng: 11.9403, yearOpened: 1945, yearClosed: null },
  { name: "Vicenza (Camp Ederle)", country: "US", lat: 45.5475, lng: 11.5361, yearOpened: 1955, yearClosed: null },
  { name: "Stuttgart (EUCOM HQ)", country: "US", lat: 48.7267, lng: 9.1125, yearOpened: 1945, yearClosed: null },
  { name: "Wiesbaden (Clay Kaserne)", country: "US", lat: 50.0497, lng: 8.3253, yearOpened: 1945, yearClosed: null },
  { name: "Baumholder", country: "US", lat: 49.6167, lng: 7.3333, yearOpened: 1951, yearClosed: null },
  { name: "Ansbach (Katterbach)", country: "US", lat: 49.3006, lng: 10.5719, yearOpened: 1945, yearClosed: null },
  { name: "Landstuhl Medical Center", country: "US", lat: 49.4064, lng: 7.5664, yearOpened: 1953, yearClosed: null },

  // US bases closed
  { name: "Clark Air Base", country: "US", lat: 15.186, lng: 120.56, yearOpened: 1947, yearClosed: 1991 },
  { name: "Subic Bay Naval Base", country: "US", lat: 14.794, lng: 120.283, yearOpened: 1947, yearClosed: 1992 },
  { name: "Wheelus Air Base (Libya)", country: "US", lat: 32.8963, lng: 13.276, yearOpened: 1945, yearClosed: 1970 },
  { name: "Keflavik Naval Air Station", country: "US", lat: 63.9815, lng: -22.6056, yearOpened: 1951, yearClosed: 2006 },
  { name: "Howard Air Force Base (Panama)", country: "US", lat: 8.9174, lng: -79.5994, yearOpened: 1948, yearClosed: 1999 },
  { name: "Torrejon Air Base (Spain)", country: "US", lat: 40.4967, lng: -3.4458, yearOpened: 1953, yearClosed: 1992 },
  { name: "Hellenikon Air Base (Greece)", country: "US", lat: 37.893, lng: 23.7281, yearOpened: 1947, yearClosed: 1991 },
  { name: "Taipei Air Station (Taiwan)", country: "US", lat: 25.0375, lng: 121.5125, yearOpened: 1950, yearClosed: 1979 },
  { name: "Cam Ranh Bay (Vietnam)", country: "US", lat: 11.9981, lng: 109.2189, yearOpened: 1965, yearClosed: 1972 },
  { name: "Udorn RTAFB (Thailand)", country: "US", lat: 17.3864, lng: 102.7881, yearOpened: 1964, yearClosed: 1976 },
  { name: "U-Tapao (Thailand)", country: "US", lat: 12.6797, lng: 101.0047, yearOpened: 1966, yearClosed: 1976 },
  { name: "Peshawar Air Station (Pakistan)", country: "US", lat: 34.0151, lng: 71.5786, yearOpened: 1958, yearClosed: 1970 },
  { name: "Dhahran Airfield (Saudi Arabia)", country: "US", lat: 26.2653, lng: 50.1522, yearOpened: 1945, yearClosed: 1962 },
  { name: "Prince Sultan Air Base (Saudi Arabia)", country: "US", lat: 24.0627, lng: 47.5805, yearOpened: 1996, yearClosed: 2003 },
  { name: "Manta Air Base (Ecuador)", country: "US", lat: -0.9467, lng: -80.7339, yearOpened: 1999, yearClosed: 2009 },
  { name: "K-2 Karshi-Khanabad (Uzbekistan)", country: "US", lat: 38.8336, lng: 65.9214, yearOpened: 2001, yearClosed: 2005 },
  { name: "Manas Transit Center (Kyrgyzstan)", country: "US", lat: 43.0614, lng: 74.4778, yearOpened: 2001, yearClosed: 2014 },
  { name: "Camp Bondsteel (Kosovo)", country: "US", lat: 42.3611, lng: 21.2461, yearOpened: 1999, yearClosed: null },
  { name: "Soto Cano Air Base (Honduras)", country: "US", lat: 14.3822, lng: -87.6172, yearOpened: 1981, yearClosed: null },
  { name: "Camp Butler (Okinawa)", country: "US", lat: 26.3355, lng: 127.7781, yearOpened: 1945, yearClosed: null },

  // US bases established post-2001 (War on Terror)
  { name: "Bagram Airfield (Afghanistan)", country: "US", lat: 34.9461, lng: 69.265, yearOpened: 2001, yearClosed: 2021 },
  { name: "Kandahar Airfield (Afghanistan)", country: "US", lat: 31.5058, lng: 65.8478, yearOpened: 2001, yearClosed: 2021 },
  { name: "Camp Lemonnier Expansion", country: "US", lat: 11.548, lng: 43.148, yearOpened: 2007, yearClosed: null },
  { name: "Niamey Drone Base (Niger)", country: "US", lat: 13.4817, lng: 2.1697, yearOpened: 2013, yearClosed: 2024 },
  { name: "Agadez Air Base 201 (Niger)", country: "US", lat: 16.9653, lng: 7.9886, yearOpened: 2018, yearClosed: 2024 },
  { name: "Cooperative Security Location Arba Minch (Ethiopia)", country: "US", lat: 6.0389, lng: 37.5911, yearOpened: 2011, yearClosed: 2015 },

  // US – Pacific pivot
  { name: "EDCA Basa Air Base (Philippines)", country: "US", lat: 15.4886, lng: 120.5586, yearOpened: 2016, yearClosed: null },
  { name: "EDCA Fort Magsaysay (Philippines)", country: "US", lat: 15.4753, lng: 121.0928, yearOpened: 2016, yearClosed: null },
  { name: "EDCA Lal-lo (Philippines)", country: "US", lat: 18.2011, lng: 121.6594, yearOpened: 2023, yearClosed: null },
  { name: "RAAF Tindal (Australia rotation)", country: "US", lat: -14.5214, lng: 132.3781, yearOpened: 2023, yearClosed: null },
  { name: "Camp Blaz (Guam)", country: "US", lat: 13.5767, lng: 144.8883, yearOpened: 2023, yearClosed: null },
  { name: "Palau compact site", country: "US", lat: 7.3419, lng: 134.4792, yearOpened: 2024, yearClosed: null },

  // US – Europe (post-2022 buildup)
  { name: "Redzikowo Aegis Ashore (Poland)", country: "US", lat: 54.4756, lng: 17.1019, yearOpened: 2022, yearClosed: null },
  { name: "Powidz (Poland rotation)", country: "US", lat: 52.3947, lng: 17.8536, yearOpened: 2022, yearClosed: null },
  { name: "Câmpia Turzii (Romania rotation)", country: "US", lat: 46.5061, lng: 23.8864, yearOpened: 2022, yearClosed: null },
  { name: "Mihail Kogălniceanu (Romania)", country: "US", lat: 44.3631, lng: 28.4883, yearOpened: 2003, yearClosed: null },
  { name: "Deveselu Aegis Ashore (Romania)", country: "US", lat: 44.0353, lng: 24.3672, yearOpened: 2016, yearClosed: null },

  // ===== UNITED KINGDOM =====
  { name: "Akrotiri (Cyprus)", country: "UK", lat: 34.5839, lng: 32.9878, yearOpened: 1956, yearClosed: null },
  { name: "Dhekelia (Cyprus)", country: "UK", lat: 34.9775, lng: 33.7261, yearOpened: 1960, yearClosed: null },
  { name: "BIOT / Diego Garcia (UK)", country: "UK", lat: -7.3133, lng: 72.4511, yearOpened: 1966, yearClosed: null },
  { name: "Mount Pleasant (Falklands)", country: "UK", lat: -51.8228, lng: -59.0036, yearOpened: 1985, yearClosed: null },
  { name: "Brunei Garrison", country: "UK", lat: 4.8417, lng: 114.7694, yearOpened: 1962, yearClosed: null },
  { name: "HMS Jufair (Bahrain)", country: "UK", lat: 26.2203, lng: 50.6181, yearOpened: 2018, yearClosed: null },
  { name: "Duqm (Oman)", country: "UK", lat: 19.5003, lng: 57.0247, yearOpened: 2019, yearClosed: null },
  { name: "Aden (South Yemen)", country: "UK", lat: 12.7855, lng: 45.0187, yearOpened: 1839, yearClosed: 1967 },
  { name: "Suez Canal Zone (Egypt)", country: "UK", lat: 30.4586, lng: 32.3498, yearOpened: 1882, yearClosed: 1956 },
  { name: "RAF Habbaniya (Iraq)", country: "UK", lat: 33.3717, lng: 43.5695, yearOpened: 1936, yearClosed: 1959 },
  { name: "Singapore naval base", country: "UK", lat: 1.4542, lng: 103.8267, yearOpened: 1938, yearClosed: 1971 },
  { name: "HMNB Kenya (Mombasa)", country: "UK", lat: -4.0435, lng: 39.6682, yearOpened: 1890, yearClosed: 1964 },
  { name: "Malta (Grand Harbour)", country: "UK", lat: 35.8914, lng: 14.5156, yearOpened: 1800, yearClosed: 1979 },
  { name: "RAF Gan (Maldives)", country: "UK", lat: -0.6936, lng: 73.1558, yearOpened: 1957, yearClosed: 1976 },
  { name: "Trincomalee (Ceylon)", country: "UK", lat: 8.5711, lng: 81.2361, yearOpened: 1795, yearClosed: 1957 },
  { name: "Simonstown (South Africa)", country: "UK", lat: -34.1875, lng: 18.4328, yearOpened: 1814, yearClosed: 1975 },

  // ===== FRANCE =====
  { name: "Djibouti (FFDj)", country: "France", lat: 11.5478, lng: 43.1478, yearOpened: 1977, yearClosed: null },
  { name: "Réunion garrison", country: "France", lat: -21.1144, lng: 55.5325, yearOpened: 1946, yearClosed: null },
  { name: "Port Bouët (Côte d'Ivoire)", country: "France", lat: 5.2569, lng: -3.9264, yearOpened: 1960, yearClosed: null },
  { name: "Libreville (Gabon)", country: "France", lat: 0.4586, lng: 9.4122, yearOpened: 1960, yearClosed: null },
  { name: "Dakar (Senegal)", country: "France", lat: 14.7325, lng: -17.4436, yearOpened: 1960, yearClosed: null },
  { name: "N'Djamena (Chad)", country: "France", lat: 12.1348, lng: 15.0557, yearOpened: 1986, yearClosed: null },
  { name: "Abu Dhabi (UAE)", country: "France", lat: 24.4281, lng: 54.4581, yearOpened: 2009, yearClosed: null },
  { name: "Nouméa (New Caledonia)", country: "France", lat: -22.2711, lng: 166.4572, yearOpened: 1945, yearClosed: null },
  { name: "Papeete (French Polynesia)", country: "France", lat: -17.5516, lng: -149.5585, yearOpened: 1946, yearClosed: null },
  { name: "Fort-de-France (Martinique)", country: "France", lat: 14.6161, lng: -61.0589, yearOpened: 1946, yearClosed: null },
  { name: "Cayenne (French Guiana)", country: "France", lat: 4.9372, lng: -52.3261, yearOpened: 1946, yearClosed: null },
  { name: "Bizerte (Tunisia)", country: "France", lat: 37.2744, lng: 9.8739, yearOpened: 1881, yearClosed: 1963 },
  { name: "Mers-el-Kébir (Algeria)", country: "France", lat: 35.7283, lng: -0.7222, yearOpened: 1830, yearClosed: 1968 },
  { name: "Bangui (Central African Republic)", country: "France", lat: 4.3947, lng: 18.5582, yearOpened: 1960, yearClosed: 2022 },
  { name: "Ouagadougou (Burkina Faso)", country: "France", lat: 12.3686, lng: -1.5275, yearOpened: 1961, yearClosed: 2023 },
  { name: "Bamako / Gao (Mali)", country: "France", lat: 16.2697, lng: -0.0049, yearOpened: 2013, yearClosed: 2022 },
  { name: "Niamey (Niger)", country: "France", lat: 13.5116, lng: 2.1254, yearOpened: 2013, yearClosed: 2023 },

  // ===== RUSSIA / USSR =====
  { name: "Sevastopol (Crimea/Ukraine)", country: "Russia", lat: 44.6054, lng: 33.5221, yearOpened: 1783, yearClosed: null },
  { name: "Tartus (Syria)", country: "Russia", lat: 34.8897, lng: 35.8867, yearOpened: 1971, yearClosed: null },
  { name: "Khmeimim (Syria)", country: "Russia", lat: 35.4011, lng: 35.9486, yearOpened: 2015, yearClosed: null },
  { name: "Gyumri 102nd Base (Armenia)", country: "Russia", lat: 40.7942, lng: 43.8453, yearOpened: 1995, yearClosed: null },
  { name: "Kant Air Base (Kyrgyzstan)", country: "Russia", lat: 42.8533, lng: 74.8464, yearOpened: 2003, yearClosed: null },
  { name: "201st Base (Tajikistan)", country: "Russia", lat: 38.5592, lng: 68.7742, yearOpened: 1993, yearClosed: null },
  { name: "Baikonur (Kazakhstan)", country: "Russia", lat: 45.965, lng: 63.305, yearOpened: 1955, yearClosed: null },
  { name: "Transnistria (Moldova)", country: "Russia", lat: 46.8403, lng: 29.6331, yearOpened: 1992, yearClosed: null },
  { name: "South Ossetia (Georgia)", country: "Russia", lat: 42.2269, lng: 43.9685, yearOpened: 2008, yearClosed: null },
  { name: "Abkhazia (Georgia)", country: "Russia", lat: 43.0036, lng: 40.9869, yearOpened: 2008, yearClosed: null },
  { name: "Cam Ranh Bay (Vietnam, USSR)", country: "Russia", lat: 11.9942, lng: 109.2178, yearOpened: 1979, yearClosed: 2002 },
  { name: "Lourdes SIGINT (Cuba)", country: "Russia", lat: 22.9961, lng: -82.4339, yearOpened: 1964, yearClosed: 2001 },
  { name: "Berbera (Somalia, USSR)", country: "Russia", lat: 10.4389, lng: 45.0369, yearOpened: 1969, yearClosed: 1977 },
  { name: "Aden (South Yemen, USSR)", country: "Russia", lat: 12.7897, lng: 45.0286, yearOpened: 1968, yearClosed: 1990 },
  { name: "Luanda (Angola, USSR)", country: "Russia", lat: -8.8383, lng: 13.2344, yearOpened: 1975, yearClosed: 1991 },
  { name: "Cienfuegos (Cuba, USSR)", country: "Russia", lat: 22.1456, lng: -80.4353, yearOpened: 1962, yearClosed: 1963 },
  { name: "Poti (Georgia, USSR)", country: "Russia", lat: 42.1514, lng: 41.6719, yearOpened: 1950, yearClosed: 2007 },

  // ===== CHINA =====
  { name: "PLA Support Base Djibouti", country: "China", lat: 11.59, lng: 43.06, yearOpened: 2017, yearClosed: null },
  { name: "Ream Naval Base (Cambodia)", country: "China", lat: 10.5, lng: 103.63, yearOpened: 2024, yearClosed: null },
  { name: "Fiery Cross Reef", country: "China", lat: 9.55, lng: 112.89, yearOpened: 2015, yearClosed: null },
  { name: "Subi Reef", country: "China", lat: 10.92, lng: 114.08, yearOpened: 2015, yearClosed: null },
  { name: "Mischief Reef", country: "China", lat: 9.90, lng: 115.54, yearOpened: 2015, yearClosed: null },

  // ===== TURKEY =====
  { name: "Camp TURKSOM (Qatar)", country: "Turkey", lat: 25.42, lng: 51.50, yearOpened: 2015, yearClosed: null },
  { name: "Mogadishu (TURKSOM Somalia)", country: "Turkey", lat: 2.0469, lng: 45.3017, yearOpened: 2017, yearClosed: null },
  { name: "Al-Watiya Air Base (Libya)", country: "Turkey", lat: 31.9464, lng: 11.9306, yearOpened: 2020, yearClosed: null },
  { name: "TRNC (Northern Cyprus)", country: "Turkey", lat: 35.2856, lng: 33.4456, yearOpened: 1974, yearClosed: null },
  { name: "Bashiqa Camp (Iraq)", country: "Turkey", lat: 36.5, lng: 43.4, yearOpened: 2015, yearClosed: null },
  { name: "Northern Syria operations", country: "Turkey", lat: 36.6, lng: 37.0, yearOpened: 2016, yearClosed: null },
  { name: "Suakin (Sudan, planned)", country: "Turkey", lat: 19.1056, lng: 37.3347, yearOpened: 2018, yearClosed: 2023 },

  // ===== JAPAN =====
  { name: "JSDF Djibouti", country: "Japan", lat: 11.56, lng: 43.17, yearOpened: 2011, yearClosed: null },

  // ===== INDIA =====
  { name: "Farkhor Air Base (Tajikistan)", country: "India", lat: 37.5036, lng: 69.3167, yearOpened: 2002, yearClosed: null },
  { name: "Agaléga (Mauritius)", country: "India", lat: -10.45, lng: 56.62, yearOpened: 2023, yearClosed: null },
  { name: "Assumption Island (Seychelles, planned)", country: "India", lat: -9.7422, lng: 46.5069, yearOpened: 2022, yearClosed: null },

  // ===== UAE =====
  { name: "Assab (Eritrea)", country: "UAE", lat: 13.0672, lng: 42.7392, yearOpened: 2015, yearClosed: null },
  { name: "Berbera (Somaliland)", country: "UAE", lat: 10.39, lng: 45.05, yearOpened: 2017, yearClosed: null },
  { name: "Aden (Yemen)", country: "UAE", lat: 12.83, lng: 45.03, yearOpened: 2015, yearClosed: null },
  { name: "Socotra (Yemen)", country: "UAE", lat: 12.47, lng: 53.87, yearOpened: 2018, yearClosed: null },
  { name: "Perim Island (Yemen)", country: "UAE", lat: 12.65, lng: 43.42, yearOpened: 2015, yearClosed: null },

  // ===== ITALY =====
  { name: "Djibouti (Italian base)", country: "Italy", lat: 11.54, lng: 43.16, yearOpened: 2013, yearClosed: null },

  // ===== GERMANY =====
  { name: "Djibouti (German contingent)", country: "Germany", lat: 11.53, lng: 43.135, yearOpened: 2002, yearClosed: 2018 },

  // ===== AUSTRALIA =====
  { name: "Butterworth (Malaysia)", country: "Australia", lat: 5.4593, lng: 100.3914, yearOpened: 1958, yearClosed: null },

  // ===== SOUTH KOREA =====
  { name: "Akh Unit (UAE)", country: "South Korea", lat: 24.35, lng: 54.65, yearOpened: 2011, yearClosed: null },

  // ===== SAUDI ARABIA =====
  { name: "Yemen operations", country: "Saudi Arabia", lat: 15.35, lng: 44.2, yearOpened: 2015, yearClosed: null },

  // ===== QATAR =====
  { name: "Turkish base mutual (Qatar hosts)", country: "Qatar", lat: 25.43, lng: 51.52, yearOpened: 2018, yearClosed: null },

  // ===== ISRAEL =====
  { name: "UAE cooperation facility", country: "Israel", lat: 24.46, lng: 54.37, yearOpened: 2021, yearClosed: null },
];

// Precompute per-year totals for the timeline graph
export function getBaseCountsByYear() {
  const counts = {};
  for (let year = 1950; year <= 2026; year++) {
    let total = 0;
    let usBases = 0;
    let otherBases = 0;
    for (const base of bases) {
      if (base.yearOpened <= year && (base.yearClosed === null || base.yearClosed > year)) {
        total++;
        if (base.country === "US") usBases++;
        else otherBases++;
      }
    }
    counts[year] = { total, usBases, otherBases };
  }
  return counts;
}

export function getBasesForYear(year) {
  return bases.filter(
    (b) => b.yearOpened <= year && (b.yearClosed === null || b.yearClosed > year)
  );
}
