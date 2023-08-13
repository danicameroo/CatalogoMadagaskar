import React, { useEffect } from 'react'
import "./RecomendItem.css"
import { Link, useLocation } from 'react-router-dom'

const RecomendItem = ({item}) => {
  const location = useLocation();
  const scrollOnLoadRecomend = new URLSearchParams(location.search).get('scrollOnLoadRecomend') === 'true';

    useEffect(() => {
        if (scrollOnLoadRecomend) {
        const scrollToBasicSection = () => {
            const element = document.getElementById('recomend');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToBasicSection();
        }
    }, [scrollOnLoadRecomend]);


  return (
    <Link to={`/product/${item._id}`} className='linkRecomend'>
      <div className='contornoRecomend'>
        <div>
          <img className='imgRecomend' src={item.img} alt=''></img>
          <div className='textRecomend'>
            <p className='titleRecomend'>{item.title}</p>
            <p className='descRecomend'>{item.desc}</p>
            <p id="recomend" className='priceRecomend'>{item.precio}$</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecomendItem