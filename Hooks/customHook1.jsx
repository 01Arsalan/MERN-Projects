import { useEffect } from "react";

export default function useLogger(data){
    useEffect(()=>{
        console.log(data)
    },[data])
}