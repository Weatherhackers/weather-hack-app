import { useState } from "react"

export default function SearchBar() {
    // Create a state hook for user input
    const [input, setInput] = useState();

    return (
        <nav>
            <input />
            <button>Search</button>
        </nav>
    )
}