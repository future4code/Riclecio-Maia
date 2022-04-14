import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

export const GlobalState = (props) =>{

    const [history, setHistory] = useState([])

    return(
        <GlobalStateContext.Provider  value={{
            history, setHistory
        }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
} 