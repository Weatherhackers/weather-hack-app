import "./styling/WeatherHack.css"
import React from "react";

// Define function component that takes 'weatherData' prop
const WeatherHack = ({ weatherData }) => {
    return (

        // JSX structur eof the component
        <div className="weather-hack">
            <div className="hack">
                <div>
                    {/* Display the title of the weather hack. */}
                    <p className="hack-title">Weather Hack!</p>

                    {/* Display the weather description from the 'data' prop. */}
                    <p className="hack-description">It is hot!</p>

                    {/* Get weather description from API */}
                    <p className="hack-description">{weatherData.weather[0].description}</p>

                </div>
                {/* Display an SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-bi-person-raised-hand" viewBox="0 0 16 15">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z"/>
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                </svg>
            </div> 
         </div>

    )
}

export default WeatherHack; 

