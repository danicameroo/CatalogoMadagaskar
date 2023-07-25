import React from 'react'
import imgBanner from "../../image/Banner.png"
import "./Banner.css"
import Buscador from '../../image/barraBusqueda.svg'
import Lupa from '../../image/lupa.svg'
import { useEffect, useState } from "react"
import axios from 'axios'
import ReactDOM from 'react-dom';
import Product from '../Product/Product'
import { Link } from 'react-router-dom';
import CategoryItem from '../CategoriesItem/categoriesItem.jsx'

function Banner({item}) {

 

  return (
      <div className='Banner'>
        <div className='banner'>
          <div>
            <img className='imgBanner' src={imgBanner}></img>
            <img src={Buscador} className='barra'/>
            <Link to='/buscador'><input className='input'></input></Link>
            <img className='buscarIcono' src={Lupa}></img>
            <button className='buscar'><p className='textBuscar'>BUSCAR</p></button>
          </div>
        </div>
      </div>
  );
}


export default Banner