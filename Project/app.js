import './App.css';
import logo from "./img/logo.jpeg"
import home_grill from "./img/home_grill.jpeg"
import pizza from "./img/tile_pizza01.avif"
import about_img from "./img/about-img.jpeg"
import message_img from "./img/message_img.jpeg"
import journey_img from "./img/journey_img.png"
import map_img from "./img/map.png"
import quality_logo from "./img/quality_img.svg"
import explore_img from "./img/explore_img.jpeg"
import seller_img from "./img/quality_img2.avif"
import franchise_img from "./img/franchise.jpeg"
import franchise_logo from "./img/fran_logo.png"
import upi_img from "./img/upi-icon.svg"
import social_img from "./img/insta.png"

const data = [
  {
    img: "",
    price: "200",
    above: "800",
    code: "LPN200"
  },
  {
    img: "",
    price: "250",
    above: "1000",
    code: "LPN250"
  },
  {
    img: "",
    price: "300",
    above: "1200",
    code: "LPN300"
  },
  {
    img: "",
    price: "350",
    above: "1400",
    code: "LPN350"
  },
  {
    img: "",
    price: "400",
    above: "1600",
    code: "LPN400"
  },
  {
    img: "",
    price: "450",
    above: "1800",
    code: "LPN450"
  }
];



function Navigation(){
    return(
      <nav className="nav">
        <div className="logo-brand">
          <img className="logo" src={logo} width="100px"/>
          <h2 className="brand">the grill</h2>
        </div>
        <div className="links">
          <a href="" className="link">home</a>
          <Link to="./Menu.html" className="link">menu</Link>
          <a href="" className="link">locator</a>
          <a href="" className="link">contact us</a>
          <a href="" className="link">log-in</a>
        </div>
      </nav>
    )
}
function Home_img(){
  return(
    <div className="homeImg">
      <img className="homeImg--img"src={home_grill}/>
    </div>
  )
}
function Deals(){
  function Tile(props){
    return(
      <div className="deal">
        <section className="deal--detail">
          <p className="flat">flat</p>
          <p className="price">${props.price}</p>
          <div className="offAbove">
            <p className="off">off</p>
            <p className="above">on order <br/>above <br/>${props.above}</p>
          </div>
          <p className="code"><span className="dim">use code </span>{props.code}</p>
        </section>
        <div className="deal--img">
          <img className="img" src={pizza} />
        </div>
      </div>
    )
  }
  return(
    <div className="deals">
      <h2 className="deals--title">deals and offers</h2>
      <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
      <div className="tiles">
        <Tile
          price="50"
          above="1000"
          code="LPN50"
        />
        <Tile
          price="50"
          above="1000"
          code="LPN50"
        />
        <Tile
          price="50"
          above="1000"
          code="LPN50"
        />
        <Tile
          price="50"
          above="1000"
          code="LPN50"
        />
        <Tile
          price="50"
          above="1000"
          code="LPN50"
        />
        <Tile
          price="50"
          above="1000"
          code="LPN50"
        />
      </div>
      <div className="deals--btns">
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
      </div>
    </div>
  )
}
function About(){
  return(
    <div className="about">
      <div className="about--detail">
        <h2 className="title">about us</h2>
        <p className="discription">the story of The Grill</p>
        <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
        <p className="detail">he story of India's fastest growing pizza place started back in 2011 when Sanam Kapoor opened his very first pizzeria in his hometown Chandigarh. Inspired by his own search for delicious pizza options, he started to wonder if there was a better way of doing pizza – and business. The last thing the world needed was another pizzeria, but maybe this one could be different and everyone could get exactly what they wanted, made fresh on demand. It all started sounding pretty great, and soon Sanam was opening the first La Pino'z in his hometown Chandigarh and there was no looking back. As of today, La Pino'z has 600+ outlets across India with the recent one opening in London.</p>
      </div>
      <img className="about--img" src={about_img} />
    </div>
  )
}
function Message(){
  return(
    <div className="message">
      <img className="message--img" src={message_img} />
    </div>
  )
}
function GrowthJourney(){
  function Tile(props){
    return(
      <div className="date_dis">
        <p className="date">{props.date}</p>
        <p className="discription">{props.dis}</p>
      </div>
    )
  }
  return(
    <div className="growth">
      <div className="growth--info">
        <h2 className="growth--title"><span className="brand">The Grill </span>Growth Journey</h2>
        <Tile date="2011" dis="Launched the 1st Outlet."/>
        <Tile date="2011" dis="Launched the 1st Outlet."/>
        <Tile date="2011" dis="Launched the 1st Outlet."/>
        <Tile date="2011" dis="Launched the 1st Outlet."/>
        <Tile date="2011" dis="Launched the 1st Outlet."/>
      </div>
      <img className="growth--img" src={journey_img} />
    </div>
  )
}
function Across(){
  function Tile(props){
    return(
    <div className="across-tile">
      <img className="img" src={map_img} />
      <p className="place">{props.place}</p>
    </div>
    )
  }
  return(
    <div className="across">
      <h2 className="across--title">loved across towns</h2>
      <p className="across-launch">now launching in over 4 towns</p>
      <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
      <div className="across--flags">
          <Tile place="Yejbyour"/>
          <Tile place="Yejbyour"/>
          <Tile place="Yejbyour"/>
          <Tile place="Yejbyour"/>
      </div>
    </div>
  )
}
function Quality(){
  function Tile(props){
    return(
      <div className="tile">
        <img className="img" src={quality_logo} width="50px"/>
        <p className="tile--name">{props.name}</p>
        <p className="tile--detail">{props.detail}</p>
      </div>
    )
  }
  return(
    <div className="quality">
      <h2 className="title">Quality Assured</h2>
      <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
      <div className="quality--items">
        <Tile name="Finest Ingredients" detail="Made from the finest quality ingredients, to give you an authentic Italian taste, every single time."/>
        <Tile name="Fresh Ingredients" detail="Made from the finest quality ingredients, to give you an authentic Italian taste, every single time."/>
        <Tile name="Safety and Quality Standards" detail="Made from the finest quality ingredients, to give you an authentic Italian taste, every single time."/>
      </div>
    </div>
  )
}
function Explore(){
  function Tile(props){
    return(
      <div className="tile">
        <img className="img" src={explore_img}/>
        <p className="name">{props.name}</p>
      </div>
    )
  }
  return(
    <div className="explore">
      <h2 className="explore--title">explore</h2>
      <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
      <div className="explore--items">
        <Tile name="Dish"/>
        <Tile name="Dish"/>
        <Tile name="Dish"/>
        <Tile name="Dish"/>
        <Tile name="Dish"/>
      </div>
    </div>
  )
}
function BestSeller(){
  function Tile(props){
    return(
      <div className="tile">
        <img className="img" src={seller_img} />
        <p className="recommended">&#9733; recommended</p>
        <p className="name">{props.name}</p>
        <p className="detail">{props.detail}</p>
      </div>
    )
  }
  return(
    <div className="bestSellers">
      <h2 className="bestSellers--title">Best Sellers</h2>
      <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
      <div className="bestSellers--items">
        <Tile name="Grilled Stake" detail="burnt freshness...." />
        <Tile name="Grilled Stake" detail="burnt freshness...." />
        <Tile name="Grilled Stake" detail="burnt freshness...." />
      </div>
    </div>
  )
}
function Franchise(){
  return(
    <div className="franchise">
      <img className="img" src={franchise_img}/>
      <p className="title">The Grill</p>
      <p className="num">04+</p>
      <p className="outlets">Acoss The State</p>
      <img className="logo" src={franchise_logo}/>
    </div>
  )
}
function CustomerReview(){
  function Tile(props){
    return(
      <div className="tile">
        <p className="review">Wow! The Grill is hands down the BEST pizza place in town. From the fast delivery to all kinds of food, and belive me you cant go wrong here.</p>
        <p className="name">Arsalan</p>
      </div>
    )
  }
  return(
    <div className="cusRev">
      <p className="cusRev--detail1">Happy Customers Around the Stores</p>
      <p className="cusRev--detail2">More than 1,00,000 Users Served Till Date</p>
      <p className="lines"> <hr className="line"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr><hr className="smallLine"></hr></p>
      <div className="reviewsList">
          <Tile />
      </div>
    </div>
  )
}
function Footer(){
  return(
    <footer className="footer">
      <div className="section links">
        <h2 className="title">UseFul Links</h2>
        <p className="lines"> <hr className="line"></hr></p>
        <a href="" className="link">Refund Policy</a>
        <a href="" className="link">Terms & Conditions</a>
        <a href="" className="link">Privacy Policy</a>
        <a href="" className="link">Promo Codes</a>
      </div>
      <div className="section payment"> 
        <h2 className="title">Payment Methods</h2>
        <p className="lines"> <hr className="line"></hr></p>
        <div className="img-list">
          <img className="img" src={upi_img}></img>
          <img className="img" src={upi_img}></img>
          <img className="img" src={upi_img}></img>
          <img className="img" src={upi_img}></img>
          <img className="img" src={upi_img}></img>
          <img className="img" src={upi_img}></img>
        </div>
      </div>
      <div className="section contact">
        <h2 className="title">Contact Us</h2>
        <p className="lines"> <hr className="line"></hr></p>
        <a href="" className="link">Customer Support</a>
        <a href="" className="link">support@theGrill.in</a>
        <a href="" className="link">Franchise Enquiry</a>
        <a href="" className="link">info@theGrill.in</a>
      </div>
      <div className="section follow">
        <h2 className="title">Follow Us</h2>
        <p className="lines"> <hr className="line"></hr></p>
        <div className="logo-list">
          <img className="logo" src={social_img}></img>
          <img className="logo" src={social_img}></img>
          <img className="logo" src={social_img}></img>
          <img className="logo" src={social_img}></img>
          <img className="logo" src={social_img}></img>
        </div>
      </div>
    </footer>
  )
}
function Owned(){
  return(
    <div className="owned">
      <p className="powered">Powered By <span className="color">PaRvAz</span></p>
      <p className="rights">&copy;Copyright. All Rights Reserved</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <Home_img />
      <Deals />
      <About />
      <Message />
      <GrowthJourney />
      <Across />
      <Quality />
      <Explore />
      <BestSeller />
      <Franchise />
      <CustomerReview />
      <Footer />
      <Owned />
    </>
  )
}

export default App;
