import React from 'react';

export default function WeatherDescription({ weatherData }) {
  if (weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description) {
    return (
      <div>
        <p>Weather Description: {weatherData.weather[0].description}</p>
      </div>
    );
  }
  return null;
}