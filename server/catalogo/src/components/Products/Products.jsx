import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import axios from 'axios';
import '../Product/Product.css'
import Right from '../../image/right-arrow.png'
import './Products.css'
import { Link } from 'react-router-dom';
import ProductsMap from '../ProductsMap/ProductsMap';
import { useLocation } from "react-router-dom"

const Products = ( ) => {
  const location = useLocation()
  const cat = (location.pathname.split("/")[2])
  const [orden, setOrden] = useState('Menor precio');
  const [products, setProducts] = useState([]);
  const [indice, setIndice] = useState(0);

  const paginaActual = Math.floor(indice / 12) + 1;
  const paginasTotales = Math.ceil(products.length / 12);

  //Traer productos de mongo
  useEffect(()=>{
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:8080/api/products?category=${cat}` : `http://localhost:8080/api/products`);
        setProducts(res.data);
      } catch(err){
        console.log(err)
      }
    };
    getProducts()
    
  },[cat]);

  //Opciones del filtro
    const opcionesOrden = [
      { value: ' ', label: 'Precio' },
      { value: 'ascendente', label: 'Menor precio' },
      { value: 'descendente', label: 'Mayor precio' },
      { value: 'Gatos', label: 'Gato' },
      { value: 'Perros', label: 'Perro' },
    ];

    //Funcion del filtro
    const ordenarProductos = (products, orden) => {
      let productosOrdenados = [...products];
    
      if (orden === 'ascendente') {
        productosOrdenados.sort((a, b) => a.price - b.price);
      } else if(orden === 'descendente'){
        productosOrdenados.sort((a, b) => b.price - a.price);
      }else if (orden === 'Perros' || orden === 'Gatos') {
        productosOrdenados = productosOrdenados.filter(
          (producto) => producto.categories.includes(orden)
        );
      }
    
      return productosOrdenados;
    };
  
  //Setear orden al cambiar el filtro
    const handleChangeOrden = (event) => {
      setOrden(event.target.value);
    };

  //Botones de Siguiente y Anterior
    const avanzar = () => {
      if (indice + 12 < products.length) {
        setIndice(indice + 12);
      }
    };

    const retroceder = () => {
      if (indice - 12 >= 0) {
        setIndice(indice - 12);
      }
    };

  //Para mapear
    const productosFiltrados = ordenarProductos(products, orden);
    const productosActuales = productosFiltrados.slice(indice, indice + 12);

  return (
    <div className='Pro'>
      <div className='Orden'>
        <div className='containerCat'><Link to='/products/Todos'  className='linkCatLine'><p className="tituloCat">Categorias</p></Link><img src={Right} className='rightIcon'/><p className='tituloCat colorSubTitulo'>{cat}</p></div>
        <div className='filtro'>
          <p className='filtroTitle'>Ordenar por</p>
          <select className='filtroSelect' value={orden} onChange={handleChangeOrden}>
            {opcionesOrden.map((opcion) => (
              <option key={opcion.value} value={opcion.value} className='filtrOption'>
                {opcion.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='Products'>
        {productosActuales.map((producto) => (
        <Product item={producto} key={producto.id}/>
        ))}
      </div>
      <div className='Paginas'>
        <button className='boton' onClick={retroceder} disabled={indice === 0}>
          Anterior
        </button>
        <p className='paginasTexto'>
          {paginaActual} de {paginasTotales}
        </p>
        <button className='boton' onClick={avanzar} disabled={indice + 12 >= products.length}>
          Siguiente
        </button>
      </div>
    </div>
  )
}


export default Products