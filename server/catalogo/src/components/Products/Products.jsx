import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import axios from 'axios';


const Products = ({cat}) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:8080/api/products?category=${cat}` : `http://localhost:8080/api/products`);
        setProducts(res.data);
      } catch(err){
        console.log(err)
      }
    };
    getProducts()
    
  },[cat]);


  return (
    <div>
        {products.map((item) => <Product item={item} key={item.id} />)}
    </div>
  )
}

export default Products