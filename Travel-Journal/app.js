const data = [
    {
        id: 1,
        img: "./img/mount_fuji.webp", 
        city: "Japan",
        place: "Mount Fuji",
        date: "5 August, 2023 - 12 August, 2023",
        description: "Mount Fuji, Japan's most iconic and revered volcano, offering breathtaking vistas, serene beauty, and cultural significance."
    },
    {
        id: 2,
        img: "./img/efil_tower.jpeg", 
        city: "Paris",
        place: "Eiffel Tower",
        date: "10 September, 2023 - 17 September, 2023",
        description: "Famous wrought-iron landmark, an iconic symbol of France and a global cultural icon."
    },
    {
        id: 3,
        img: "./img/liberty.avif", 
        city: "New York",
        place: "Statue of Liberty",
        date: "2 July, 2023 - 9 July, 2023",
        description: "A symbol of freedom and democracy, located on Liberty Island in New York Harbor."
    },
    {
        id: 4,
        img: "./img/Rome_colleseum.avif", 
        city: "Rome",
        place: "Colosseum",
        date: "15 October, 2023 - 22 October, 2023",
        description: "An ancient amphitheater known for its historical and architectural significance."
    },
    {
        id: 5,
        img: "./img/sydney.webp", 
        city: "Sydney",
        place: "Sydney Opera House",
        date: "8 November, 2023 - 15 November, 2023",
        description: "A renowned performing arts venue with a distinctive sail-like design."
    }
];


const container= document.getElementById("root")
const root= ReactDOM.createRoot(container)

function Nav(){
    return(
        <header className="nav">
            <img src="./img/pngwing.com.png" width="60px" className="nav--img"/>
            <p className="nav--title">my travel journal</p>
        </header>
    )
}

function Tile(props){
    return(
        <div className="tile">
            <img src={props.img} className="tile--img" />
            <section className="tile--detail">
                <div className="tile--detail--location">
                    <p className="tile--detail--city">{props.city}</p>
                    <p className="tile--detail--map">View On Google Maps</p>
                </div>
                <h2 className="tile--detail--place">{props.place}</h2>
                <p className="tile--detail--date">{props.date}</p>
                <p className="tile--detail--discription">{props.description}</p>
            </section>
        </div>
    )
}

function Hero(){
    let jsxElem=data.map(item=>{//creating jsx obj's
        return(<Tile 
            key={item.id}
            img={item.img}
            city={item.city}
            place={item.place}
            date={item.date}
            description={item.description}
        />)
    })
    return(
        <div className="hero">
            {jsxElem}
        </div>
    )
}

function App(){
    return(
        <>
            <Nav />
            <Hero />
        </>
    )
}

root.render(<App />)


