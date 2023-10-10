import { createContext, useState } from "react"

// Create context for the API
export const ApiContext = createContext(null);

export default function ApiProvider ({children}) {
    // Create a state hook for the API
    const [apiUrl, setApiUrl] = useState('https://api.openweathermap.org/data/2.5');

    return (
        <ApiContext.Provider value={{api: apiUrl, setApi: setApiUrl}}>
            {children}
        </ApiContext.Provider>
    )
}