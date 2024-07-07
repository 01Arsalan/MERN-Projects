const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
    const [img,setImg]=React.useState("https://i.imgflip.com/1g8my4.jpg")
    const [apiData,setApiData]=React.useState([])
    const [count,setCount]=React.useState(1)
    
    // React.useEffect(()=>{
    // fetch(`https://swapi.dev/api/people/${count}`)
    //     .then(res=>res.json())
    //     .then(data=>setApiData(JSON.stringify(data)))
    // },[count])
    

    React.useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res=>res.json())
            // .then(data=>(JSON.stringify(data.data.memes)))   
            .then(data=>setApiData(data.data.memes))
    },[count])

    function change(){
        setCount(count+1)
        setImg(apiData[count].url)
        console.log(apiData[count].url)
    }

    return(
        <>
            <div className="box">
                <h2 className="API-title">API </h2>
                <button onClick={change}>Get Next obj</button>
                <img className="API-data" src={img} />
            </div>
        </>
    )

}


root.render(<>
             <App />
            </>)


