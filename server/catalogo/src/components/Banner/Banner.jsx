import React from 'react'
import imgBanner from "../../image/Banner.png"
import "./Banner.css"

function Banner (){
  return (
    <div className='Banner'>
        <div className='banner'>
            <img className='imgBanner' src={imgBanner}></img>
        </div>
    </div>
  )
}

export default Banner