import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import WeatherHack from './WeatherHack';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <div>
        <SearchBar setWeatherData={setWeatherData}/>
      </div>
      <div>
      <WeatherHack weatherData={weatherData} />
      </div>
    </div>
  )
} 