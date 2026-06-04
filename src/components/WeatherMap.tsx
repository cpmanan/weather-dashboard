import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface WeatherMapProps {
  lat: number;
  lon: number;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ lat, lon }) => {
  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: '400px', width: '100%' }} data-testid="weather-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          Weather Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WeatherMap;
