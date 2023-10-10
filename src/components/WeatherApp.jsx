import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import WindSpeed from "./WindSpeed";
import WeatherDescription from './WeatherDescription';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <div>
        <SearchBar setWeatherData={setWeatherData} />
      </div>
      <div>
        <WindSpeed windData={weatherData && weatherData.wind} />
        <WeatherDescription weatherData={weatherData} />
      </div>
    </div>
  )
}
