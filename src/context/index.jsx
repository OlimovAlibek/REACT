import { createContext, createContext } from "react";

export const Context = createContext();

const title = "Hello REACTTTT"

const ContextProvider = () => {
    return (
        <Context.Provider value={title}></Context.Provider>
    )
}

export default ContextProvider;