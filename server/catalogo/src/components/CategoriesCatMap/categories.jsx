import React from 'react'
import "./categories.css"
import { Link } from 'react-router-dom'


const CategoriesCatMap = ({item}) => {
  return (
    <div className='CatCat'>
      <Link to={`/products/${item.cat}`}><div className='subCategoriesCat'>
          <img className='imgCategories' alt='imagen categorias' src={item.img} />
          <p className='textCat'>{item.title}</p>
      </div></Link>
    </div>
  )
}

export default CategoriesCatMap