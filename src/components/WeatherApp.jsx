import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import WindSpeed from "./WindSpeed";
import Condition from './Condition';
import Icon from './Icon';
import Temperature from './Temperature';
import DateTime from './DateTime';
import WeatherHack from './WeatherHack';
import WeatherHumidity from './WeatherHumidity';
import "./styling/DescriptionBlock.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

    if (weatherData && weatherData.coord) {
        return (
            <div>
            <div>
                <SearchBar setWeatherData={setWeatherData} />
            </div>
            <div className="weatherAndIcon">
                <Condition weatherData={weatherData} />
                <Icon weatherData={weatherData}/>
            </div>
            <div className="temperatureBlock">
              <DateTime />
              <Temperature tempData={weatherData} />
            </div>
            <div className="descriptionBlock">
                <WindSpeed windData={weatherData && weatherData.wind} />
                <WeatherHumidity weatherData={weatherData}/>
            </div>
            <div className="weatherHackBlock">
                <WeatherHack weatherData={weatherData} />
            </div>
            </div>
    )}
    else if (weatherData && weatherData.cod === "404") {
        return (
            <div>
                <div>
                    <SearchBar setWeatherData={setWeatherData} />
                </div>
                <h1 className="questionMark">?</h1>
                <h2>No data found</h2>
            </div>
        )
    }
    else {
        return(
            <div>
                <div>
                    <SearchBar setWeatherData={setWeatherData} />
                </div>
                <h1 className="title">
                    WEATHER HACKERS
                </h1>
            </div>
        )
    }
}
