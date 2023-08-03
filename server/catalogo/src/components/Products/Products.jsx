import axios from 'axios';
import Product from '../Product/Product'
import React from 'react'
import Right from '../../image/right-arrow.png'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Products.css'

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
    <div className='ProductsPro'>
      <div className='OrdenPro'>
        <div className='containerCatPro'><Link to='/products/Todos'  className='linkCatLinePro'><p className="tituloCatPro">Categorias</p></Link><img src={Right} className='rightIconPro' alt=''/><p className='tituloCatPro colorSubTituloPro'>{cat}</p></div>
          <div className='filtroPro'>
            <p className='filtroTitlePro'>Ordenar por</p>
            <select className='filtroSelectPro' value={orden} onChange={handleChangeOrden}>
              {opcionesOrden.map((opcion) => (
                <option key={opcion.value} value={opcion.value} className='filtrOptionPro'>
                  {opcion.label}
                </option>
              ))} 
            </select>
          </div>
      </div>
      <div className='productsPro'>
          {productosActuales.map((producto) => (
            <Product item={producto} key={producto.id}/>
          ))}
      </div>
      <div className='PaginasPro'>
      {indice !== 0 && <button className='botonPro' onClick={retroceder} disabled={indice === 0}>Anterior
        </button>}
        <p className='paginasTextoPro'>
          {paginaActual} de {paginasTotales}
        </p>
        {indice + 12 < productosFiltrados.length && (<button className='botonPro' onClick={avanzar} disabled={indice + 12 >= products.length}>
          Siguiente
        </button>)}
      </div>
    </div>
  )
}

export default Products