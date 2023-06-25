import NavBar from "../NavBar/NavBar"
import Categories from "../../components/Categories/categories"
import Recomend from "../../components/Recomend/recomend"
import Banner from "../../components/Banner/Banner.jsx"
import Footer from "../Footer/Footer"
import Mapa from "../../components/Mapa/Mapa"
import End from "../../components/End/End"

const Home = () => {
    return (
      <div>
        <NavBar />
        <Banner />
        <Categories />
        <Recomend />
        <Footer />
        <Mapa />
        <End />
      </div>
    )
  }
  
  export default Home