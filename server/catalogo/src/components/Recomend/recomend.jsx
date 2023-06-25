import { recomend } from '../../data'
import RecomendItem from '../RecomendItem/RecomendItem.jsx'


const Recomend = () => {
  return (
    <div className='Reco'>
      <h1 className='titleRecomend'>RECOMENDACIONES SEMANALES</h1>
      <div className='Recomend'>
          {recomend.map(item =>(
              <RecomendItem item={item} key={item.id}/>
          ))}
      </div>
  </div>
  )
}

export default Recomend