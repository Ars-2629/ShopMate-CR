import {Routes,Route} from 'react-router-dom';
import { ProductList } from '../pages/ProductList';


export function AllRoutes() {
  const cartlist = false;
  return (

      <Routes>
        <Route path='/' element={<ProductList  cartlist={!cartlist} title='Home'/>} />
        <Route path='cartlist' element={<ProductList urlPath ='price=149&price=179' cartlist={cartlist} title='Cart' />} />
      </Routes>
   
  )
}
