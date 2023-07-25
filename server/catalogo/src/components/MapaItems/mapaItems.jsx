import React from 'react'
import './mapa.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const MapaItem = ({item}) => {

  const handleClick = () => {
    const element = document.getElementById('cat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='mapas'>
      <div className='subMapa'>
      <Link to={`/products/${item.cat}`} className='linkPro'><p className='textMap'><button onClick={handleClick}>{item.title}</button></p></Link>
      </div>
    </div>
  )
}

export default MapaItem