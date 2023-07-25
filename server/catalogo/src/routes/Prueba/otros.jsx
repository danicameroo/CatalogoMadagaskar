import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { categories } from '../../data'

function Prueba() {
    return (
      <div className="box">
        <Carousel useKeyboardArrows={true}>
          {categories.map((item) => (
            <div className="slide">
              <img alt="sample_file" src={item.img} key={item.id} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
  export default Prueba;