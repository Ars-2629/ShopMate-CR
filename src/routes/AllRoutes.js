import {Routes,Route} from 'react-router-dom';
import { ProductList,Cart } from '../pages/export';


export function AllRoutes() {

  return (

      <Routes>
        <Route path='/' element={<ProductList title='Home'/>} />
        <Route path='cartlist' element={<Cart  title='Cart' />} />
      </Routes>
   
  )
}
