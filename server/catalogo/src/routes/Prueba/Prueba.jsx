import React from 'react';
import './Prueba.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import { categories } from '../../data';

const Prueba =( )=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                categories.map((item)=>{
                        return(
                            <div className="slider-card" key={item._id} >
                                <div className="slider-card-image" style={{backgroundImage:`url(${item.img})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default Prueba;