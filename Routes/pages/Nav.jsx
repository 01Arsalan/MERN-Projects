import { Link,Outlet } from "react-router-dom"
export default function Nav() {
    return (
        <>
            <p>
                <Link style={{paddingRight:"5px"}} to="/">Home</Link>
                <Link style={{paddingRight:"5px"}} to="/about">About</Link>
                <Link style={{paddingRight:"5px"}} to="/contact">Cantact</Link>
                <Link style={{paddingRight:"5px"}} to="/books">Books</Link>
                <Outlet context={{info:"avl"}}/>
            </p>
        </>
    )

}