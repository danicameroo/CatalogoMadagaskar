import {NavLink} from 'react-router-dom';
import "./NavBar.css"
import LogoNav from '../../image/madagaskarLogoAColor.svg'

function NavBar(id){
    const handleClick = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log(element)
        console.log(id)
      };

    return(
        <div className='Menu'>
            <img src={LogoNav} className='imgNav' alt='' />
            <div>
                <ul className='categorias'>
                    <NavLink className='link' to='/'><li className='listaNav'>INICIO</li></NavLink>
                    <button onClick={handleClick}><NavLink className='link' to={`/products/Todos#${id}`}><li className='listaNav'>CATEGORIAS</li></NavLink></button>
                    <NavLink className='link' to='/categoria/Romance'><li className='listaNav'>CONTACTO</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar