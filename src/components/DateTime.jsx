export default function DateTime() {
    
    const date = new Date();
    // const currentDate = new Intl.DateTimeFormat('en-AU', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(date);
    const currentDate = date.toLocaleDateString()
    const currentTime = new Intl.DateTimeFormat('en-AU', {hour: 'numeric', minute: 'numeric'}).format(date).toUpperCase();

    return (
        <div>
          <p className="datetime">{currentDate} {currentTime}</p>
        </div>
    )
}