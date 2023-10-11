export default function Temperature({tempData}) {
    // If data exists
    if (tempData) {
        // Return temperature
        return (
            <div>
               <p className="temperature">{tempData.main.temp}&deg;C</p>
            </div>
        )
    }
}