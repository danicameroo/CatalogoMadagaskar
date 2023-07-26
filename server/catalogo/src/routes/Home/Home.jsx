import Banner from "../../components/Banner/Banner"
import Categories from "../../components/Categories/categories"
import Recomend from "../../components/Recomend/recomend"
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Home = () => {

  const { path } = useParams();
  const RecomendRef = useRef(null);

  useEffect(()=> {
    if(path === '/'){
      RecomendRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  },[])

    return (
      <>
        <Banner />
        <Categories />
        <div ref={RecomendRef} id="recomend">
          <Recomend /> 
        </div>
      </>
    )
  }
  
export default Home