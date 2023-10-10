import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import WindSpeed from "./WindSpeed";
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <div>
        <SearchBar setWeatherData={setWeatherData} />
      </div>
      <div className="temperatureBlock">
        <Temperature tempData={weatherData} />
      </div>
      <div className="descriptionBlock">
        <WindSpeed windData={weatherData && weatherData.wind} />
        <WeatherDescription weatherData={weatherData} />
      </div>
    </div>
  )
}
