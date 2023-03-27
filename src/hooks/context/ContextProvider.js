import React, { useReducer } from 'react'

export const context = React.createContext()

export default function ContextProvider(props){
    return (
        <context.Provider>
            {props.children}
        </context.Provider>
    )
}