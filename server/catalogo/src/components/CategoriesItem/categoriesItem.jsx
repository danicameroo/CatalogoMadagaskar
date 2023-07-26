import React from 'react'
import "./CategoriesItem.css"
import { Link } from 'react-router-dom'


const CategoryItem = ({item}) => {
  return (
    <div className='CatItem'>
      <Link to={`/products/${item.cat}`} className='linkCatItem active'>
        <div className='subCatItem'>
          <img className='imgCatItem' alt='' src={item.img} />
          <p className='textCatItem'>{item.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem