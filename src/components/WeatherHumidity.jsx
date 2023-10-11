import React from 'react';

export default function WeatherHumidity({ weatherData }) {
  if (weatherData && weatherData.main && weatherData.main && weatherData.main.humidity) {
    return (
      <div>
        <p>Humidity: {weatherData.main.humidity}%</p>
      </div>
    );
  }
  return null;
}