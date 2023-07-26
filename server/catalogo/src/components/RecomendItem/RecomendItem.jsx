import React from 'react'
import "./RecomendItem.css"
import { Link } from 'react-router-dom'

const RecomendItem = ({item}) => {
  return (
    <Link to={`/product/${item._id}`} className='linkRecomend'>
      <div className='contornoRecomend'>
        <div>
          <img className='imgRecomend' src={item.img}></img>
          <div className='textRecomend'>
            <p className='titleRecomend'>{item.title}</p>
            <p className='descRecomend'>{item.desc}</p>
            <p className='priceRecomend'>{item.precio}$</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecomendItem