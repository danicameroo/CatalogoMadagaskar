import {NavLink} from 'react-router-dom';
import { categories } from '../../data';
import MapaItem from '../MapaItems/mapaItems'
import './Mapa.css'

function Mapa(){
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
                <h2 className='textMapRec'>Recomendacion semanal</h2>
            </div>
            </div>
        </div>
    );
};

export default Mapa