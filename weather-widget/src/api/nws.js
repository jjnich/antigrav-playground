const LAT = 42.0148;
const LON = -89.3323;

export async function fetchWeather() {
  try {
    // 1. Get the grid points for the location
    const pointRes = await fetch(`https://api.weather.gov/points/${LAT},${LON}`);
    if (!pointRes.ok) throw new Error('Failed to fetch NWS grid points');
    const pointData = await pointRes.json();
    
    // Get location name
    const city = pointData.properties.relativeLocation.properties.city;
    const state = pointData.properties.relativeLocation.properties.state;
    const locationName = `${city}, ${state}`;

    // 2. Get the hourly forecast
    const hourlyUrl = pointData.properties.forecastHourly;
    const hourlyRes = await fetch(hourlyUrl);
    if (!hourlyRes.ok) throw new Error('Failed to fetch NWS hourly forecast');
    const hourlyData = await hourlyRes.json();

    // 3. Get the current forecast (for current temperature and condition)
    const currentUrl = pointData.properties.forecast;
    const currentRes = await fetch(currentUrl);
    if (!currentRes.ok) throw new Error('Failed to fetch NWS current forecast');
    const currentData = await currentRes.json();

    return {
      locationName,
      current: currentData.properties.periods[0], // Current period
      hourly: hourlyData.properties.periods.slice(0, 24), // Next 24 hours
    };
  } catch (error) {
    console.error('NWS API Error:', error);
    throw error;
  }
}
