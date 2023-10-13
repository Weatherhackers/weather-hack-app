import React, { useState } from 'react';
import './styling/Temperature.css';

export default function Temperature({tempData}) {
    const [isCelsius, setIsCelsius] = useState(true);

    const toggleUnit = () => {
      setIsCelsius((prevIsCelsius) => !prevIsCelsius);
    };  

    // If data exists
    if (tempData) {
        // Calculate the temperature in both Celsius and Fahrenheit
        const celsiusTemp = Math.round(tempData.main.temp);
        const fahrenheitTemp = Math.round((celsiusTemp * 9/5) + 32);

    // Determine which temp to display based on the unit
    const displayedTemp = isCelsius ? celsiusTemp : fahrenheitTemp;
    const unit = isCelsius ? '°C' : '°F';

        // Return temperature
        return (
            <div>
                <p className="temperature"onClick={toggleUnit}>
                    {displayedTemp}{unit}
                </p>
            </div>
        );
    }
}