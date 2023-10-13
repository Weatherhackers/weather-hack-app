import './styling/Temperature.css';

export default function Temperature({tempData}) {

    // If data exists
    if (tempData) {
        // rounding the temperature
        let temp = Math.round(tempData.main.temp);

        // Return temperature
        return (
            <div>
               <p className="temperature">{temp}&deg;C</p>
            </div>
        )
    }
}