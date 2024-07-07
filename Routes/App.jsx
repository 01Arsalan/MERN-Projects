import './App.css'
import {Link,Routes,Route} from 'react-router-dom'

import Home from "./pages/Home"
import Nav from './pages/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Books from './pages/Books';



function App() {
  return (
    <>
    <h1>Sidebar</h1>
    <Routes location="/book2">
      <Route path="/book2" element={<p>this is a Side bar</p>}></Route>
    </Routes>


    <h1>body</h1>
    <Routes>
       <Route path='/' element={<Nav/>}>{/*will have to add outlet to nav to display child components */}
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/books/*' element={<Books/>}></Route>
      </Route>
    </Routes>
    </>);
}

export default App;
