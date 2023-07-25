import { publicRequest } from "../../requestMethod";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductId.css";
import Right from "../../image/right-arrow.png";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Product from "../../components/Product/Product";

const ProductId = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [indice, setIndice] = useState(0);

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
  }, [product]); // Agregar product como dependencia adicional

  const filteredProducts = products.filter((producto) => {
    // Verificar si el título del producto actual está definido
    if (!producto.title) {
      return false;
    }
  
    // Obtener la primera palabra del título del producto actual
    const firstWord = product.title.split(" ")[0];
  
    // Filtrar por títulos que comiencen con la misma palabra
    const sameFirstWord = producto.title
      .toLowerCase()
      .startsWith(firstWord.toLowerCase());
  
    // Verificar si el producto comparado es igual al producto original
    const isSameProduct = producto._id === product._id;

    // Devolver true si se cumple el criterio de filtrado y el producto no es igual al producto original
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

  const productosActual = filteredProducts.slice(indice, indice + 4);

  console.log(productosActual)

  return (
    <div className="ProductIdCont">
      <div className="containerCat">
        <Link to="/products/Todos" className="linkCatLine">
          <p className="tituloCat">Categorias</p>
        </Link>
        <img src={Right} className="rightIcon" />
        <p className="tituloCat colorSubTitulo">Producto</p>
      </div>
      <div className="ProductId">
        <div className="containerIdUno">
          <img src={product.img} className="imgProductId" />
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
          <div className="containerSelect">
            <p className="selectTitulo">Presentacion: </p>
            <select className="select">
              {product.size?.map((obj) => (
                <option value="obj" className="option">
                  {obj}
                </option>
              ))}
            </select>
          </div>
          <div className="containerSelect">
            <p className="selectTitulo">Caracteristica: </p>
            <select className="select">
              {product.colorFlavor?.map((obj) => (
                <option value="obj" className="option">
                  {obj}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="ProductSe">
      {indice !== 0 && <MdChevronLeft className="slidericon-left" onClick={retroceder} />}
        {productosActual.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      {indice + 4 < filteredProducts.length && (<MdChevronRight className="slidericon-right" onClick={avanzar} />)}
  </div>
</div>
);
};

export default ProductId;