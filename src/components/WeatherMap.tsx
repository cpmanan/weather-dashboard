import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface WeatherMapProps {
  lat: number;
  lon: number;
  city: string;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ lat, lon, city }) => {
  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          {city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WeatherMap;
