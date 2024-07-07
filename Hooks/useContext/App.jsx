import './App.css'

//useEffect


// function App(){
//   const [size,setSize]=React.useState(window.innerWidth)

//   const handleResize= ()=>{
//     setSize(window.innerWidth)
//   }

//   React.useEffect(()=>{
//     window.addEventListener("resize",handleResize)
//     console.log("added")
//     return ()=>{
//       window.removeEventListener('resize',handleResize)
//       console.log("removed")
//     }
//   },[])

//   return(
//     <>
//       <span>{size}</span>
//     </>
//   )
// }



//use Context
import React from 'react';
import {ThemeProvider} from './components/ThemeContext';
import FunctionContextComp from './components/FunctionContextComp';

function App(){
  return(
    <ThemeProvider>
      <FunctionContextComp/>
    </ThemeProvider>
  )
}

export default App;
