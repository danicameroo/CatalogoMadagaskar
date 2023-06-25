import React from 'react'
import "./RecomendItem.css"

const RecomendItem = ({item}) => {
  return (
    <div className='contornoReco'>
        <div>
            <img className='imgRecomend' src={item.img}></img>
            <div className='textReco'>
              <p className='titleReco'>{item.title}</p>
              <p className='descReco'>{item.desc}</p>
              <p className='priceReco'>{item.precio}$</p>
            </div>
        </div>
    </div>
  )
}

export default RecomendItem