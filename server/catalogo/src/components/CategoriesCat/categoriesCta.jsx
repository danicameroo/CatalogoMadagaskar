import React, { useState, useRef, useEffect } from 'react';
import './categoriesCat.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { categories } from '../../data';
import { Link } from 'react-router-dom';

const CategoriesCat = (props) => {
  const [sliderPos, setSliderPos] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      setSliderWidth(sliderWidth);
    }
  }, []);

  const slideLeft = () => {
    const slider = sliderRef.current;
    const newPos = sliderPos - 1500;
    slider.scrollLeft = newPos;
    setSliderPos(newPos);
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    const newPos = sliderPos + 1500;
    slider.scrollLeft = newPos;
    setSliderPos(newPos);
  };

  const [sliderWidth, setSliderWidth] = useState(0);
  const showLeftIcon = sliderPos > 0;
  const showRightIcon = sliderPos + 1500 < sliderWidth;

  useEffect(() => {
    const handleClick = () => {
      const element = document.getElementById(props.idCat);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const button = document.querySelector('.linkCat button');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, [props.idCat]);

  return (
    <div className="CategoriesCat">
      {showLeftIcon && <MdChevronLeft size={40} className="slider-icon-left" onClick={slideLeft} />}
      <div id="slider" ref={sliderRef}>
        {categories.map((item) => {
          return (
            <Link to={`/products/${item.cat}#${props.idCat}`} className="linkCat" key={item._id}>
              <div className="slider-card">
                <div
                  className="slider-card-image"
                  style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}
                ></div>
                <p className="slider-card-title">{item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {showRightIcon && <MdChevronRight size={40} className="slider-icon-right" onClick={slideRight} />}
    </div>
  );
};

export default CategoriesCat;