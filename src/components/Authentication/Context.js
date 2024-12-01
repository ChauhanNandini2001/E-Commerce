import { createContext, useState } from "react";


export const authContext = createContext()

function ContextProvider({ children }) {

    const [userdata, setUserdata] = useState([])

    return <authContext.Provider value={{ userdata, setUserdata }}>
        {children}
    </authContext.Provider>
}

export default ContextProvider;