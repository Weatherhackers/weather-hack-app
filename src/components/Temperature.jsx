export default function Temperature({tempData}) {
    // If data exists
    if (tempData) {
        // Return temperature
        return (
            <div>
               <p>{tempData.main.temp}&deg;C</p>
            </div>
        )
    }
}