import React from "react"
import { useThemeContext,useThemeUpdateContext } from "./ThemeContext"

export default function FunctionContextComp(){
    const theme=useThemeContext()
    const toggleFun=useThemeUpdateContext()
    

    return(
        <>
            <button onClick={toggleFun}>Change</button>
            <div style={{height:"200px",width:"200px",background:theme? "white": "green"}}></div>
        </>
    )
}