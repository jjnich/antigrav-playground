import React from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function RadarMap({ lat, lon, timestamp }) {
  // Fix for default Leaflet marker icons in React (though we aren't using markers here)
  return (
    <div className="radar-section">
      <h3 className="section-title">Live Radar</h3>
      <div className="map-container scrollable">
        <MapContainer 
          center={[lat, lon]} 
          zoom={8} 
          scrollWheelZoom={true} 
          style={{ height: '100%', width: '100%', background: '#1a1a24' }}
          attributionControl={false}
          zoomControl={false}
        >
          {/* Dark Base Map */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap &copy; CARTO"
          />
          {/* IEM NEXRAD Radar WMS Layer (Always up to date) */}
          <WMSTileLayer
            key={timestamp}
            url="https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi"
            layers="nexrad-n0q-900913"
            format="image/png"
            transparent={true}
            opacity={0.6}
            version="1.1.1"
            _={timestamp}
          />
        </MapContainer>
      </div>
    </div>
  );
}
