import './styling/Condition.css'

export default function Condition({ weatherData }) {
    if(weatherData && weatherData.weather[0].main) {
        return (
            <div>
                <p className="main">
                    {weatherData.weather[0].main.toUpperCase()}
                </p>
                <p className="location">
                    {weatherData.name}
                </p>
            </div>
        )
    } 
    
} 