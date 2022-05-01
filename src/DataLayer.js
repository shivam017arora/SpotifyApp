import React, { createContext, useContext, useReducer } from "react";

//create context to have across all components
export const DataLayerContext = createContext();

// make a function to use as a wrapper which takes children as a argument
export const DataLayer = ({ initialState, reducer, children }) => (
    //use the context to provide 
    //have components inside the context
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext) //use hook to save value

/*
By description Redux has a simple design pattern: all the “write” logic of you app is converted into 
a single function and to execute this logic all you need is dispatch to Redux an object that describes
what “action” has happened in your current state. Then Redux applies this “action” in its state, 
returning a new state with the desired change.
---------------------------------------------------------------------------------------------------
we know that the data sharing between components is done by top-down (parent to child)
But we also know that this can generate a bunch of problems, such as bugs, verbose code, some spaghetti 
code that nobody wants go change. That’s how ContextAPI came to play.
---------------------------------------------------------------------------------------------------
Context API provides a simple way to share data between components without the need of passing props 
across all levels of you app tree.
*/

