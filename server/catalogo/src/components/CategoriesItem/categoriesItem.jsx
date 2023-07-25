import React from 'react'
import "./CategoriesItem.css"
import { Link } from 'react-router-dom'


const CategoryItem = ({item}) => {
  return (
    <div className='Cat'>
      <Link to={`/products/${item.cat}`} className='linkCat active'><div className='subCategories'>
          <img className='imgCategories' alt='imagen categorias' src={item.img} />
          <p className='textCat'>{item.title}</p>
      </div></Link>
    </div>
  )
}

export default CategoryItem