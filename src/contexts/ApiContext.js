import { createContext, useState } from "react"

// Create context for the API
export const ApiContext = createContext(null);

export default ApiProvider () {
    // Create a state hook for the API
    const [apiUrl, setApiUrl] = useState('https://api.openweathermap.org');
}