import Home from "./routes/Home/Home"
import ProductList from "./routes/ProductsList/productsList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
        </Routes>  
      </BrowserRouter>
    </>;
};

export default App;
