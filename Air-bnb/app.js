const data = [
    {
        id: "1",
        img: "./img/afflac.jpeg",
        rating: "4.5",
        detail: "Learn how bat flies",
        rate: "From $136",
        state: 1
    },
    {
        id: "2",
        img: "./img/cavil.jpg",
        rating: "4.0",
        detail: "Glowing Red Eyes",
        rate: "From $75",
        state: 2
    },
    {
        id: "3",
        img: "./img/SeanO_pry.jpeg",
        rating: "3.2",
        detail: "How TO Be",
        rate: "From $210",
        state: 0
    },
    {
        id: "4",
        img: "./img/bella.jpeg",
        rating: "2.8",
        detail: "Danger is always ahead",
        rate: "From $98",
        state: 3
    },
    {
        id: "5",
        img: "./img/kendall.webp",
        rating: "4.9",
        detail: "Not going down.",
        rate: "From $315",
        state: 7
    },
    {
        id: "6",
        img: "./img/lala.jpeg",
        rating: "3.7",
        detail: "its  a journey",
        rate: "From $50",
        state: 4
    }
];

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

function Nav() {
    return (
        <nav className="nav">
            <img src="./img/Airbnb-logo.jpg" className="logo" />
        </nav>
    )
}
function Hero() {
    return (
        <div className="hero">
            <img src="./img/collage.png" className="hero--img" />
            <h1 className="hero--h1">Online Experiences</h1>
            <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts, all without leaving home.</p>
        </div>
    )
}
function Tile(props) {
    console.log(props.item)
    return (
        <div className="tile">
            <img src={props.item.img} className="tile--img" />
            <p className="tile--rating"><span className="star">&#9733;</span><span className="bold-rating">{props.item.rating}</span>(6)-USA</p>
            <p className="tile--detail">{props.item.detail}</p>
            <p className="tile--rate"><span className="tile--rate--bold">{props.item.rate}</span>/ person</p>
            {props.item.state===0 && <div className="tile--tag">
                <p className="tile--tag--state">Sold Out</p>
            </div>}
        </div>

    )
}
function App() {
    const JsxElements = data.map(Item => {
        return (
            <Tile
                key={Item.id}//to get rid of warning
                // img={Item.img} 
                // rating={Item.rating}
                // detail={Item.detail}
                // rate={Item.rate}
                item={Item} // passing all the item as obj.
            // {...Item}// can also be done like that 
            />
        )
    })
    return (
        <>
            <Nav />
            <Hero />
            <div className="slider">
                {JsxElements}
            </div>
        </>
    )
}


root.render(<App />)
