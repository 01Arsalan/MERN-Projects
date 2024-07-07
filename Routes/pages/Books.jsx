import Book1 from "./Book1"
import Book2 from "./Book2"
import { Link , Route, Routes ,Outlet} from "react-router-dom"

export default function Books(){
    return(
        <>
        <h1>Books</h1>
            <Link style={{paddingRight:"7rem"}} to="/books/book1">Book1</Link>
            <Link to="/books/book2">Book2</Link>

            <Routes>
                <Route path="/book1" element={<Book1/>}></Route>
                <Route path="/book2" element={<Book2/>}></Route>
            </Routes>

        </>
    )

}