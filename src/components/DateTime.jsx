import './styling/DateTime.css';

export default function DateTime({weatherData}) {
    
    const date = new Date();

    // Find the local time (default: milliseconds)
    const localDateTime = date.getTime();
    // console.log(`Local time is ${localDateTime}`)

    // Find the offset - the difference between local time and UTC time
    // (default: mins -> results: milliseconds)
    const localDateTimeOffset = date.getTimezoneOffset() * (1000 * 60);
    // console.log(`Time offset is ${localDateTimeOffset}`)

    // Calculate UTC time
    const utcTime = localDateTime + localDateTimeOffset;
    // console.log(`UTC time is ${utcTime}`)

    // Get weatherData timezone (default: seconds -> result: milliseconds)
    const weatherDataTimezone = weatherData.timezone * 1000;
    // console.log(`weatherData timezone is ${weatherDataTimezone}`)


    // Calculate location time
    const locationDateTime = new Date(utcTime + weatherDataTimezone);
    // console.log(`locationDateTime is ${locationDateTime}`)

    const currentDate = new Intl.DateTimeFormat(undefined, {day: 'numeric', month: 'short', year: 'numeric'}).format(locationDateTime);
    const currentTime = new Intl.DateTimeFormat(undefined, {hour: 'numeric', hourCycle: 'h12', minute: 'numeric'}).format(locationDateTime).toUpperCase();

    return (
        <div>
          <p className="datetime">{currentDate} {currentTime}</p>
        </div>
    )
}