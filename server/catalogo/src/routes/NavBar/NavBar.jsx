import {NavLink} from 'react-router-dom';
import "./NavBar.css"
import LogoNav from '../../image/madagaskarLogoAColor.svg'

function NavBar(){
    return(
        <div className='Menu'>
            <img src={LogoNav} className='imgNav' alt=''/>
            <div>
                <ul className='categorias'>
                    <NavLink className='link' to='/'><li className='listaNav'>INICIO</li></NavLink>
                    <NavLink className='link' to='/products/Todos'><li className='listaNav'>CATEGORIAS</li></NavLink>
                    <NavLink className='link' to='/categoria/Romance'><li className='listaNav'>CONTACTO</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar