import React from 'react';
import { format } from 'date-fns';

export default function HourlyForecast({ periods }) {
  if (!periods || periods.length === 0) return null;

  return (
    <div>
      <h3 className="section-title">Hourly Forecast</h3>
      <div className="hourly-container scrollable">
        {periods.map((period) => {
          const time = new Date(period.startTime);
          return (
            <div key={period.number} className="hourly-item">
              <div className="hourly-time">{format(time, 'h a')}</div>
              <img src={period.icon} alt={period.shortForecast} className="hourly-icon" title={period.shortForecast} />
              <div className="hourly-temp">{period.temperature}&deg;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
