const container=document.getElementById("root")
const root = ReactDOM.createRoot(container);


function Header(){
    return(
        <header className="nav">
            <img src="./logo192.png" width="100px" className="nav-icon"/>
            <h1 className="react">React</h1>
            <ul className="nav-links">
                <li className="link">Pricing</li>
                <li className="link">About</li>
                <li className="link">Contact</li>
            </ul>
        </header>
    )
}

function Main(){
    return(
        <div className="main">
            <h1 className="title">Fun facts about React</h1>
            <ul className="fact-list">
                <li className="fact">Was first released in 2013</li>
                <li className="fact">Was originally created by Jordan Walke</li>
                <li className="fact">Has well over 100K stars on GitHub</li>
                <li className="fact">Is maintained by Facebook</li>
            </ul>
        </div>
    )
}

function Footer(){
    return(
        <footer className="footer">
            <samll>© 2021 Ziroll development. All rights reserved.</samll>
        </footer>
    )
}


function App(){
    return(
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

root.render(<App />)