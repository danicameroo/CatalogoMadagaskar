import { categories } from '../../data'
import CategoriesCatMap from '../CategoriesCatMap/categories'
import "./categoriesCat.css"


const Categories = () => {
  return (
    <div className='block'>
          <h1 className='titleCat'>CATEGORIAS</h1>
          <div className='CategoriesCat'>
              {categories.map(item =>(
                  <CategoriesCatMap item={item} key={item.id}/>
              ))}
          </div>
    </div>
  )
}

export default Categories