import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({item}) => {
  return (
    <div>
        <Link to={`/product/${item._id}`}><p>{item.title}</p></Link>      
    </div>
  )
}

export default Product