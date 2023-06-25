import React from 'react'
import './mapa.css'

const MapaItem = ({item}) => {
  return (
    <div className='mapas'>
      <div className='subMapa'>
          <p className='textMap'>{item.title}</p>
      </div>
    </div>
  )
}

export default MapaItem