import { categories } from '../../data';
import MapaItem from '../MapaItems/mapaItems'
import './Mapa.css'
import { Link } from 'react-router-dom';

const Mapa = () => {

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
                <Link to={"/"} className='linkMapa'><h2 className='textMapRec'>Recomendaciones semanales</h2></Link>
              </div>
            </div>
        </div>
    );
};

export default Mapa