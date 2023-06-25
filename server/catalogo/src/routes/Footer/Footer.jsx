import {NavLink} from 'react-router-dom';
import imgLogo from '../../image/madagaskarLogoBordeBlanco.svg'
import './Footer.css'
import ig from '../../image/Instagram.svg'
import tiktok from '../../image/TikTok.svg'
import whatsapp from '../../image/WhatsApp.svg'

function Footer(){
    return(
        <div className='Footer'>
            <div>
                <img src={imgLogo} className='ImgLogo' alt=''/>
            </div>
            <div>
                <h1 className='contactoLista'>CONTACTO</h1>
                <ul className='Contacto'>
                    <li className='lista'><img className='iconoFooter' src={ig}></img><p>@mimadagaskar</p></li>
                    <li className='lista'><img className='iconoFooter' src={tiktok}></img><p>@mimadagaskar</p></li>
                    <li className='lista'><img className='iconoFooter' src={whatsapp}></img><div className='blockLista'><p>0414-4250547</p><p>0414-4250547</p></div></li>
                </ul>
            </div>
            <div className='direFooter'>
                <h1 className='direText'>DIRECCION</h1>
                <h2 className='textDire'>Manzana B-10 Avenida Sector 1, Urbanizacion La Esmeralda, San Diego 2006, Carabobo</h2>
                <iframe className='ubicacion' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.44424144947!2d-67.97228242512404!3d10.225709269110602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d3b79ec421b%3A0x2292556f1ff46689!2sMadagaskar!5e0!3m2!1ses-419!2sve!4v1687455621371!5m2!1ses-419!2sve" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Footer