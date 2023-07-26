import RecomendItem from '../RecomendItem/RecomendItem.jsx'
import { recomend } from '../../data'
import './recomend.css'

const Recomend = () => {
  return (
    <div className='Reco'>
      <h1 className='titleReco'>RECOMENDACIONES SEMANALES</h1>
      <div className='RecomendReco'>
        {recomend.map(item =>(
          <RecomendItem item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Recomend