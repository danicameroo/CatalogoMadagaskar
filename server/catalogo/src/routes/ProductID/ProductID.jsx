import Banner from "../../components/Banner/Banner"
import CategoriesCat from "../../components/CategoriesCat/categoriesCta"
import ProductId from "../../components/ProductId/ProductId"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"

const ProductID = () => {
    const { category } = useParams();
    const categoriesRef = useRef(null);

    //Navegar al Ref
    useEffect(()=> {
      if(category === 'Todos' || 'Gatos' || 'Perros' || 'Alimentos' || 'Cepillos' || 'Farmacia' || 'Snacks' || 'Cosmeticos' || 'Juguetes' || 'Kennel' || 'Camas' || 'Platos' || 'Arena'){
        categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [category])

  return (
    <>
    <Banner />
    <CategoriesCat/>
    <div ref={categoriesRef} id="categoriesID">
      <ProductId />
    </div>
    </>
  )
}

export default ProductID