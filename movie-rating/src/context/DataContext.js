import { createContext, useReducer } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";

export const DataContext = createContext

export const DataContextProvider = ({children})=> {

    const [state, dispatch] = useReducer(DataReducer, initialState)


    return(

        <DataContext.Provider values={{state,dispatch}}>{children}</DataContext.Provider>
    )
}