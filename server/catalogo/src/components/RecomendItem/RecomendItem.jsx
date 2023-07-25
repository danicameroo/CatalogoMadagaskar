import React from 'react'
import "./RecomendItem.css"
import { Link } from 'react-router-dom'

const RecomendItem = ({item}) => {
  return (
    <Link to={`/product/${item._id}`} className='linkPro'><div className='contornoReco'>
        <div>
            <img className='imgRecomend' src={item.img}></img>
            <div className='textReco'>
              <p className='titleReco'>{item.title}</p>
              <p className='descReco'>{item.desc}</p>
              <p className='priceReco'>{item.precio}$</p>
            </div>
        </div>
    </div></Link>
  )
}

export default RecomendItem