import React from 'react'
import './Search.css'
import Buscador from '../../image/barraLarga.svg'
import Lupa from '../../image/lupa.svg'
import { useEffect, useState, useRef  } from "react"
import axios from 'axios'
import Product from '../../components/Product/Product'
import CategoriesCat from "../../components/CategoriesCat/categoriesCta"
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import NoLupa from '../../image/lupa_no_encontrado.svg'


function Search() {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState(products);


  const peticionGet=async()=>{
    await axios.get(`http://localhost:8080/api/products`)
    .then(response=>{
      setProducts(response.data);
      setProduct(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
  }
  const onClick=e=>{
    filtrar(busqueda);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      filtrar(busqueda);
    }
  };
  
  
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=product.filter((elemento)=>{
      if(elemento.title && elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.categories && elemento.categories.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    });
    setProducts(resultadosBusqueda);
    
    
    setResultados(resultadosBusqueda.length > 0 ? resultadosBusqueda : 'no disponible');
  };
  
  
  useEffect(()=>{
    peticionGet();
  },[])
  
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
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const productosActuales = resultados.slice(indice, indice + 4);
  const productosActual = products.slice(indice, indice + 4);
  
  return (
    <div className='Search'>
      <div>
        <div className='banner'>
          <div>
            <img src={Buscador} className='barraSe'/>
            <input className='inputSe' type='text' value={busqueda} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}></input>
            <img className='buscarIconoSe' src={Lupa}></img>
            <button className='buscarSe' onClick={onClick}><p className='textBuscar'>BUSCAR</p></button>
          </div>
        </div>
      </div>
        <p className='titleSe'>Resultados</p>
        {resultados && resultados !== 'no disponible' ? (
        <div className='ProductSe'>
          {indice !== 0 && <MdChevronLeft className="slidericon-left" onClick={retroceder} />}
            {productosActual.map((item) => <Product item={item} key={item.id} />)}
          {indice + 4 < products.length && <MdChevronRight className="slidericon-right" onClick={avanzar} />}
        </div>
      ) : resultados === 'no disponible' ? (
        <div className='contenedorNo'>
          <img className='lupaImg' src={NoLupa}></img>
          <p className='lupaText'>No hay productos que coincidan con tu busqueda</p>
        </div>
      ) : (
        <div className='ProductSe'>
          {indice !== 0 && <MdChevronLeft className="slidericon-left" onClick={retroceder} />}
            {productosActuales.map((item) => <Product item={item} key={item.id} />)}
          {indice + 4 < products.length && <MdChevronRight className="slidericon-right" onClick={avanzar} />}
        </div>
      )}
        <h1 className='titleSer'>CATEGORIAS</h1>
        <CategoriesCat />
    </div>
  );
}


export default Search