import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({item}) => {
  return (
    <Link to={`/product/${item._id}`} className='linkPro'>
      <div className='contornoPro'>
          <img className='imgProduct' src={item.img}></img>
            <div className='textPro'>
              <p className='titlePro'>{item.title}</p>
              <p className='subPro'>Producto para Mascota</p>
              <p className='pricePro'>{item.price}$</p>
            </div>    
      </div>
    </Link>
  )
}

export default Product