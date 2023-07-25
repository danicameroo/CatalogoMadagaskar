import {NavLink} from 'react-router-dom';
import { categories } from '../../data';
import MapaItem from '../MapaItems/mapaItems'
import './Mapa.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Mapa(){

    const handleClick = () => {
        const element = document.getElementById('cat');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <div className='mapa'>
            <h1 className='tituloMapa'>Categorias</h1>
            <div>
            <div className='Mapa'>
            {categories.map(item =>(
                  <MapaItem item={item} key={item.id}/>
              ))}
            </div>
            <div className='Mapa'>
            <button onClick={handleClick}><h2 className=''>Recomendaciones semanales</h2></button>
            </div>
            </div>
        </div>
    );
};

export default Mapa