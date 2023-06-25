import Footer from "../Footer/Footer"
import Navbar from "../NavBar/NavBar"
import Products from "../../components/Products/Products"
import { useLocation } from "react-router-dom"
import CategoriesCat from "../../components/CategoriesCat/categoriesCta"
import Banner from '../../components/Banner/Banner'

const ProductList = () => {
    const location = useLocation()
    const cat = (location.pathname.split("/")[2])

  return (
    <>
    <Navbar />
    <Banner />
    <CategoriesCat />
        <div>
            <h1>{cat}</h1>
            <div>
                <Products cat={cat} />
            </div>
        </div>
    <Footer />
    </>
  )
}

export default ProductList