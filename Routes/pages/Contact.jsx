import {useOutletContext} from 'react-router-dom'
export default function Contact(){
    const {info}=useOutletContext()
    return(
        <h1>Contact {info}</h1>
    )

}