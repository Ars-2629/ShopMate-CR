import {Routes,Route} from 'react-router-dom';
import { ProductList } from '../pages/ProductList';
import {useState} from 'react'

export function AllRoutes() {
  const [cartlist,setCartList] = useState(false);
  return (

      <Routes>
        <Route path='/' element={<ProductList  cartlist={!cartlist}/>} />
        <Route path='cartlist' element={<ProductList urlPath ='price=149&price=39' cartlist={cartlist} />} />
      </Routes>
   
  )
}
