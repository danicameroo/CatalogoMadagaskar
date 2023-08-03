import React, { useState, useRef, useEffect } from 'react';
import { categories } from '../../data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './categoriesCat.css';

const CategoriesCat = () => {

  const [sliderPos, setSliderPos] = useState(0);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const showLeftIcon = sliderPos > 0;
  const showRightIcon = sliderPos + 500 < sliderWidth;
  
  //Desplazar categorias a la derecha o izquiera
  const slideLeft = () => {
    const slider = sliderRef.current;
    const newPos = sliderPos - 500;
    slider.scrollLeft = newPos;
    setSliderPos(newPos);
  };
  const slideRight = () => {
    const slider = sliderRef.current;
    const newPos = sliderPos + 500;
    slider.scrollLeft = newPos;
    setSliderPos(newPos);
  };

  const onClick = (category) => {
    setActiveCategory(category);
  };
  
  //Realizar el scroll con Ref
  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      setSliderWidth(sliderWidth);
    }
  }, []);

  return (
    <div className="CategoriesCat">
      {showLeftIcon && <MdChevronLeft size={40} className="slider-icon-leftCat" onClick={slideLeft} />}
        <div id="sliderCat" ref={sliderRef}>
          {categories.map((item) => {
            return (
              <Link to={`/products/${item.cat}`} className="linkCat" key={item._id} onClick={() => onClick(item.cat)}>
                <div className={`slider-cardCat ${activeCategory === item.cat ? 'active' : ''}`}>
                  <div className="slider-card-imageCat" ><img className='imgCat' src={item.img}/></div>
                  <p className="slider-card-titleCat">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      {showRightIcon && <MdChevronRight size={40} className="slider-icon-rightCat" onClick={slideRight} />}
    </div>
  );
};

export default CategoriesCat;

