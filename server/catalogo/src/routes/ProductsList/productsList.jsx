import Navbar from "../NavBar/NavBar"
import Products from "../../components/Products/Products"
import { useLocation } from "react-router-dom"
import CategoriesCat from "../../components/CategoriesCat/categoriesCta"
import Banner from '../../components/Banner/Banner'
import Footer from "../Footer/Footer";
import Mapa from "../../components/Mapa/Mapa";
import End from "../../components/End/End";
import { useParams } from 'react-router-dom';
import { useEffect } from "react"

const ProductList = () => {
    const location = useLocation()
    const cat = (location.pathname.split("/")[2])

    const idCat = "categories";
  return (
    <>
    <Banner />
    <CategoriesCat idCat={idCat}/>
        <div id='cat'>
            <div id="categories">
                <Products cat={cat} />
            </div>
        </div>
    </>
  )
}

export default ProductList