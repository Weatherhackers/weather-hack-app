import './styling/SearchBar.css'

export default function SearchBar(){
    let apiKey = process.env.REACT_APP_API_KEY;

    const search = async () => {
        let element = document.getElementById("searchField");
        if(element.value === "")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${apiKey}`
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    
    return (
        <nav>
            <input type="text"
                    name="searchField"
                    id="searchField"
                    placeholder="Search a city"
            />
            <div className="searchIconContainer" onClick={() => {search()}}>
                <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
            

        </nav>
    )
}