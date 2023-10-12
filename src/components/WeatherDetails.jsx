import WeatherHumidity from "./WeatherHumidity";
import WindSpeed from "./WindSpeed";
import "./styling/WeatherDetails.css";

export function WeatherDetails({ weatherData }) {
  function getColor() {
    if (weatherData && weatherData.coord) {
      if (weatherData.weather[0].icon === "01d")
        //to distinguish clear day from clear night
        return "#FF753E";

      let main = weatherData.weather[0].main.toLowerCase();

      switch (main) {
        case "thunderstorm":
          return "#CEC6EC";
        case "rain":
          return "#5F91CF";
        case "drizzle":
          return "#5F91CF";
        case "snow":
          return "#4665B4";
        case "clear":
          return "#A689D6";
        case "clouds":
          return "#2AB690";
        default:
          return "#2A9645";
      }
    }
  }

  // If data exists
  if (weatherData) {
    return (
      <div>
        <div
          className="details-container"
          style={{ backgroundColor: getColor() }}
        >
          <h5 className="details-title">Details</h5>
          <WindSpeed windData={weatherData && weatherData.wind} />
          <WeatherHumidity weatherData={weatherData} />
        </div>
      </div>
    );
  }
}
