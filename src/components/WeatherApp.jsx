import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import WindSpeed from "./WindSpeed";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <SearchBar setWeatherData={setWeatherData} />
      <WindSpeed windData={weatherData && weatherData.wind} />
    </div>
  )
}
