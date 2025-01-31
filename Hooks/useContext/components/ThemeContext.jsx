import React,{ createContext, useContext } from "react"

const ThemeContext= createContext()
const ThemeUpdateContext= createContext()

export function useThemeContext(){
    return useContext(ThemeContext)
}
export function useThemeUpdateContext(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
    const [darkTheme,setDarkTheme]=React.useState(false)
    const toggleTheme=()=>{
        setDarkTheme((dark)=>!dark)
    }

    return(
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
        
    )
}
