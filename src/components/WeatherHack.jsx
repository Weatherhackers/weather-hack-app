import "./styling/WeatherHack.css"
import React from "react";

// Define function component that takes 'weatherData' prop
const WeatherHack = ({ weatherData }) => {

    // Weather Hack logic
    function getWeatherHack({weatherData}) {
        // To distinguish clear night from clear day
        if (weatherData.weather[0].icon === "01n")
            return("Have a nice night!")

        let weatherMain = weatherData.weather[0].main.toLowerCase();
        switch (weatherMain) {
            case "thunderstorm":
                return("When thunder roars, go indoors!")
            case "drizzle":
                return("Drizzle alert: Bring an umbrella")
            case "rain":
                return("Bring an umbrella!")
            case "snow":
                return("It's cold, wear a beanie!")
            case "mist":
                return("Careful driving! Low visibility")
            case "smoke":
                return("Possible fires! Be aware")
            case "haze":
                return("Watch out on the roads!")
            case "dust":
                return("Careful, wear a mask!")
            case "fog":
                return("Be careful when driving")
            case "sand":
                return("Wear goggles!")
            case "ash":
                return("Wear a mask!")
            case "squall":
                return("Be careful! It's windy and could rain")
            case "tornado":
                return("Tornado warning! Seek shelter")
            case "clear":
                return("Clear skies, wear some sunscreen!")
            case "clouds":
                return("Bring an umbrella! It might rain")
            default:
                return("No hacks for you!")
        }
    }

    return (
        <div className="hack-container">
            <h4 className="hack-title">Weather Hack!</h4>
            <div className="weather-hack">
                <div className="hack">
                    <div>
                        {/* Display an SVG icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-bi-person-raised-hand" viewBox="0 0 16 16">
                            <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z"/>
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                        </svg>
                    </div>
                    {/* Display the weather description from the 'data' prop on the right side. */}
                    <p className="hack-description">{getWeatherHack({weatherData})}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherHack;