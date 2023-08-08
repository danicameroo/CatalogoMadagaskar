import React, { createContext, useContext, useState } from 'react';

const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const [sliderPos, setSliderPos] = useState(0);

  return (
    <SliderContext.Provider value={{ sliderPos, setSliderPos }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => useContext(SliderContext);