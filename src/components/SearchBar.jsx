import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    // Create a state hook for user input
    const [input, setInput] = useState();

    // Create a navigation hook for routing
    const navigate = useNavigate();

    // Function to handle button submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        navigate(`/location/search/${input}`)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='locationSearchField' id='locationSearchField' placeholder="Enter a location" onChange={(event) => setInput(event.target.value)} />
            <button type='submit'>Search</button>

        </form>
        </div>
    )
}