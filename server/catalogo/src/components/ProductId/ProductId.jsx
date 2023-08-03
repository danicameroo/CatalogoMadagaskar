import axios from "axios";
import Product from "../../components/Product/Product";
import Right from "../../image/right-arrow.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { publicRequest } from "../../requestMethod";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductId.css";
import Pasar from "../../image/botonPasar.svg"
import Retroceder from "../../image/Retroceder.png"

const ProductId = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [indice, setIndice] = useState(0);
  const sliderRefId = useRef(null);
  
  
  //Filtrar productos recomendados
  const filteredProducts = products.filter((producto) => {
    if (!producto.title) {
      return false;
    }
    const firstWord = product.title ? product.title.split(" ")[0] : "";
    const sameFirstWord = producto.title
    .toLowerCase()
      .startsWith(firstWord.toLowerCase());
      const isSameProduct = producto._id === product._id;
      
      return sameFirstWord && !isSameProduct;
    });
  
    //Botones de Siguiente y Anterior
    const avanzar = () => {
      if (indice + 4 < products.length) {
        setIndice(indice + 4);
      }
    };
    const retroceder = () => {
    if (indice - 4 >= 0) {
      setIndice(indice - 4);
    }
  };

  const slideLeft = () => {
    const slider = sliderRefId.current;
    const newPos = slider.scrollLeft + 1500;
    slider.scrollTo({
      left: newPos,
      behavior: "smooth"
    });
  };

  const slideRight = () => {
    const slider = sliderRefId.current;
    const newPos = slider.scrollLeft - 1500;
    slider.scrollTo({
      left: newPos,
      behavior: "smooth"
    });
  };

  //Obtener productos por ID
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);
  
  //Obtener todos los productos
  useEffect(() => {
    const peticionGet = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    peticionGet();
  }, [product]);
  
  //para mapear
  const productosActual = filteredProducts.slice(indice, indice + 4);
  return (
    <div className="ProductIdCont">
      <div className="containerCatId">
        <Link to="/products/Todos" className="linkCatLineId">
          <p className="tituloCatId">Categorias</p>
        </Link>
        <img src={Right} className="rightIconId" alt=""/>
        <p className="tituloCatId colorSubTituloId">Producto</p>
      </div>
      <div className="ProductId">
        <div className="containerIdUno" >
          {product.img?.length > 1 ? (
            <>
            <div className="imgContId" ref={sliderRefId}>
              {product.img.map((item) => (
                  <img src={item} className="imgProductCarrId"  alt="" />
              ))}
              </div>
              <div className="slider-imgContId">
                <img src={Retroceder} className="slider-imgId" onClick={slideRight}/>
                <img src={Pasar} className="slider-imgId" onClick={slideLeft}/>
              </div>
            </>
            ) : (
            <img src={product.img} className="imgProductId" alt="" />
          )}
        </div>
        <div className="containerIdDos">
          <div className="containerTextId">
            <div className="textContainerId">
              <h1 className="titleProductId">{product.title}</h1>
              <p className="subtitleProductId">{product.subtitle}</p>
              <p className="descProductId">{product.desc}</p>
              <p className="priceProductId">{product.price}$</p>
            </div>
        </div>
        <div className="containerSelectId">
          <p className="selectTituloId">Presentacion: </p>
          <select className="selectId">
            {product.size?.map((obj) => (
              <option value="obj" className="optionId">
                {obj}
              </option>
            ))}
          </select>
        </div>
        <div className="containerSelectId">
          <p className="selectTituloId">Caracteristica: </p>
          <select className="selectId">
            {product.colorFlavor?.map((obj) => (
              <option value="obj" className="optionId">
                {obj}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
    <div className="ProductSeId">
      {indice !== 0 && <MdChevronLeft className="slidericon-leftId" onClick={retroceder} />}
        {productosActual.map((item) => (  
          <Product item={item} key={item.id}/>
        ))}
      {indice + 4 < filteredProducts.length && (<MdChevronRight className="slidericon-rightId" onClick={avanzar} />)}
    </div>
  </div>
);
};

export default ProductId;