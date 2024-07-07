const root = ReactDOM.createRoot(document.getElementById("root"))

function Nav() {
    return (
        <div className="nav">
            <img className="nav--logo" src="./img/troll_face.png" />
            <h2 className="nav--title">Meme Generator</h2>
            <p className="nav--project">React--Project 3</p>
        </div>
    )
}

function Hero() {

    const [apiData, setApiData] = React.useState([])
    const [count, setCount] = React.useState(1)
    const [imgInfo, setimgInfo] = React.useState({
        img: "https://i.imgflip.com/1g8my4.jpg",
        topText: "",
        bottomText: ""
    })

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setApiData(data.data.memes))
            
    }, [count])


    function textChangeHandler(event) {
        setimgInfo(prevImgInfo => (
            event.target.id == "topText" ? { ...prevImgInfo, topText: event.target.value } :
                event.target.id == "bottomText" ? { ...prevImgInfo, bottomText: event.target.value } :
                    prevImgInfo
        ))
    }
    function change() {
        setCount(count + 1)
        let rand = Math.floor(Math.random() * 5)
        setimgInfo(prevImg => ({ ...prevImg, img: apiData[count].url }))
    }

    return (
        <div className="hero">
            <form className="form">
                <input id="topText" className="form--input" type="text" placeholder="Top Text" onChange={textChangeHandler} />
                <input id="bottomText" className="form--input" type="text" placeholder="Bottom Text" onChange={textChangeHandler} />
            </form>
            <button onClick={change} className="hero--btn">Get a new image</button>
            <div className="hero--imgHolder">
                <img className="hero--img" src={imgInfo.img} />
                <h2 className="top-text img--txt">{imgInfo.topText}</h2>
                <h2 className="bottom-text img--txt">{imgInfo.bottomText}</h2>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
            <Nav />
            <Hero />
        </>
    )
}



root.render(<App />) 