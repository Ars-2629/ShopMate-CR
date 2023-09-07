import { useState,useEffect } from 'react';
import { useCart } from '../context/CartContext';

export function ProductCard({productdata}) {
    const {addTocart,cartList,removeFromCart} = useCart();
    const [isInCart, setIsInCart ] =useState(false);

    useEffect(()=>{
      const presentInCart = cartList.find(cartItem=>cartItem.id === productdata.id);
      if(presentInCart){
        setIsInCart(true)
      } else {
        setIsInCart(false)
      }
    },[cartList,productdata.id])

  

  return (

  <div className="max-w-xs p-2 border shadow-md ml-8 mb-5">
   
  <div>
    <img
      src={`./assets/images/${productdata.id}.png`}
      className="border w-96 h-48"
      alt=""
    />
    <h1 className="text-md my-3">{productdata.name}</h1>
    
  </div>

  <div className="flex justify-between">
    <span className="text-lg">${productdata.price}</span>
    {isInCart ? (<button className="sm:text-sm text-[10px] sm:font-medium font-normal text-white bg-red-500 px-2 py-1 rounded" onClick = {()=> removeFromCart(productdata)}>
       Remove
     </button>) : (<button className="text-sm font-medium text-white bg-blue-900 px-2 py-1 rounded" onClick={()=>addTocart(productdata)}>
      Add To Cart
    </button>) }
    
  </div>
</div> 
)
}
