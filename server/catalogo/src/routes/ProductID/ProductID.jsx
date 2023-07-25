import { useLocation } from "react-router-dom"
import CategoriesCat from "../../components/CategoriesCat/categoriesCta"
import Right from '../../image/right-arrow.png'
import ProductId from "../../components/ProductoId/ProductId"
import Banner from "../../components/Banner/Banner"
import Footer from "../Footer/Footer";
import Mapa from "../../components/Mapa/Mapa";
import End from "../../components/End/End";

const ProductID = () => {
    const location = useLocation()
    const title = (location.pathname.split("/")[2])

  return (
    <>
    <Banner />
    <CategoriesCat />
    <ProductId />
    </>
  )
}

export default ProductID