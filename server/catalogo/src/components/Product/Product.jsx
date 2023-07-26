import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({item}) => {

  //Navegar al Id definido
  const handleClick = () => {
    const element = document.getElementById('categoriesID');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  };
  
  return (
    <Link to={`/product/${item._id}`} className='linkPr' onClick={handleClick}>
      <div className='contornoPr'>
          <img className='imgPr' src={item.img} alt=''></img>
          <div className='textPr'>
            <p className='titlePr'>{item.title}</p>
            <p className='subPr'>Producto para Mascota</p>
            <p className='pricePr'>{item.price}$</p>
          </div>    
      </div>
    </Link>
  )
}

export default Product