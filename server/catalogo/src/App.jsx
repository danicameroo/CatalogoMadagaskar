import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./routes/Home/Home"
import ProductList from "./routes/ProductsList/productsList";
import ProductID from "./routes/ProductID/ProductID";
import NavBar from "./routes/NavBar/NavBar";
import Search from './routes/Search/Search.jsx'
import Prueba from './routes/Prueba/Prueba'
import Footer from "./routes/Footer/Footer";
import Mapa from "./components/Mapa/Mapa";
import End from "./components/End/End";


const App = () => {
  return (
    <Router>
      <NavBar id= "categories"/>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/product/:id'} element={<ProductID />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/buscador' element={<Search />} />
        <Route path='/prueba' element={<Prueba />} />
      </Routes> 
      <Footer/>
      <Mapa />
      <End />
    </Router>
  );
};

export default App;