
import { useEffect, useState } from "react";


function getSavedValue(initialValue) {
    const value = JSON.parse(localStorage.getItem("name"))
    if (value) return value
    if (value instanceof Function) return value()
    return initialValue
}

export default function useLocalStorage(initialValue) {
    const [value, setValue] = useState(getSavedValue(initialValue))

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(value))
    }, [value])

    return [value, setValue]
}