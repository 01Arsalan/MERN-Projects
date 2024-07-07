import {useParams} from 'react-router-dom'
export default function About(){
    const {id}=useParams()
    return(
        <h1>About</h1>
    )
}