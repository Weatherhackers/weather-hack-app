import React, { useContext } from 'react';
import './styling/SearchBar.css';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

export default function SearchBar({ weatherData, setWeatherData }) {

  // API URL
  const {api} = useContext(ApiContext);

  // API key
  let apiKey = process.env.REACT_APP_API_KEY;

  // Search function
  const search = async (event) => {
    event.preventDefault();
    let element = document.getElementById("searchField");
    if (element.value === "") {
      return 0;
    }
    let url = `${api}/weather?q=${element.value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    // Update weatherData in the WeatherApp component
    setWeatherData(data);
  }

  function getColor() {
    if (weatherData && weatherData.coord) {
        if(weatherData.weather[0].icon === "01d") //to distinguish clear day from clear night
            return("#FF753E");

        let main = weatherData.weather[0].main.toLowerCase()
    
        switch (main) {
            case "thunderstorm":
                return("#CEC6EC")
            case "rain":
                return("#5F91CF");
            case "drizzle":
                return("#5F91CF");
            case "snow":
                return("#4665B4");
            case "clear":
                return("#A689D6");
            case "clouds":
                return("#2AB690");
            default:
                return("#2A9645")
        }
    }

  }

  return (
    <div>
      <form onSubmit={search}>
        <input
        type="text"
        name="searchField"
        id="searchField"
        placeholder="Search a city"
        style={{backgroundColor: getColor()}}
        />
        <button className="searchIconBtn">
          <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>
    </div>
  )
}