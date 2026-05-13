import React, { useEffect, useState } from 'react';
import { Loader2, MapPin } from 'lucide-react';
import { fetchWeather } from './api/nws';
import HourlyForecast from './components/HourlyForecast';
import RadarMap from './components/RadarMap';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  // Oregon, IL hardcoded for now
  const lat = 42.0148;
  const lon = -89.3323;

  useEffect(() => {
    async function loadData() {
      try {
        const weatherData = await fetchWeather();
        setData(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setLastUpdated(Date.now());
      }
    }
    loadData();
    
    // Refresh every 15 minutes
    const interval = setInterval(loadData, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget-container">
      {loading ? (
        <div className="loading">
          <Loader2 className="spin" size={24} />
          Loading weather data...
        </div>
      ) : error ? (
        <div className="loading" style={{ color: '#ff6b6b' }}>
          Error: {error}
        </div>
      ) : (
        <>
          <div className="header">
            <h2 className="location-name">
              <MapPin size={18} />
              {data.locationName || 'Oregon, IL'}
            </h2>
            <h1 className="current-temp">{data.current.temperature}&deg;</h1>
            <p className="current-condition">{data.current.shortForecast}</p>
          </div>
          
          <HourlyForecast periods={data.hourly} />
          <RadarMap lat={lat} lon={lon} timestamp={lastUpdated} />
        </>
      )}
    </div>
  );
}

export default App;
