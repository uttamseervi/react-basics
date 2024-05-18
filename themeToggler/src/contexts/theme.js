import React, { useContext, createContext } from "react";
// this is one more syntax for the context hook
// in the pervious code ie contextApi folder we didnt gave any default value to our context 
// we can also give the default value to the context when we create it like shown in the below
export const ThemeContext = createContext({
    // the functionality of the functions are not written here instead it is written in side the app.jsx file
    // with the similar name here we just show how it is 
    themeMode: "light",
    darkTheme: () => {

    },
    lightTheme: () => {

    }

})
export const ThemeProvider = ThemeContext.Provider;
// user defined hook
export default function useTheme(){
    return useContext(ThemeContext);
}