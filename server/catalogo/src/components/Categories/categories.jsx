import { categories } from '../../data'
import CategoryItem from '../CategoriesItem/categoriesItem.jsx'


const Categories = () => {
  return (
    <div className='block'>
          <h1 className='titleCat'>CATEGORIAS</h1>
          <div className='Categories'>
              {categories.map(item =>(
                  <CategoryItem item={item} key={item.id}/>
              ))}
          </div>
    </div>
  )
}

export default Categories