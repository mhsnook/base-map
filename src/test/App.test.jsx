import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock react-leaflet so we don't need a real DOM canvas
vi.mock('react-leaflet', () => ({
  MapContainer: ({ children, className }) => <div data-testid="map" className={className}>{children}</div>,
  TileLayer: () => null,
  CircleMarker: ({ children }) => <div data-testid="marker">{children}</div>,
  Tooltip: ({ children }) => <span>{children}</span>,
  useMap: () => ({ setView: vi.fn() }),
}));

describe('App', () => {
  it('renders the total count and subtitle', () => {
    render(<App />);
    expect(screen.getByText(/foreign military bases worldwide/i)).toBeInTheDocument();
  });

  it('renders the map container', () => {
    render(<App />);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  it('renders base markers', () => {
    render(<App />);
    const markers = screen.getAllByTestId('marker');
    expect(markers.length).toBeGreaterThan(0);
  });

  it('renders play button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
  });

  it('shows year labels in timeline', () => {
    render(<App />);
    expect(screen.getByText('1950')).toBeInTheDocument();
    expect(screen.getAllByText('2026').length).toBeGreaterThanOrEqual(1);
  });
});
