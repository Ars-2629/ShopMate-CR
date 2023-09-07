import { createContext,useContext,useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';
import { useState } from 'react';

const initialState = {
    cartList :  []
};
  
   const CartContext = createContext(initialState);

   export const CartProvider = ({children})=>{
        
   const [state,dispatch]=useReducer(cartReducer,initialState);

  const [lscartlist,setLsCartList] = useState(JSON.parse(localStorage.getItem('mycartlist')) || state.cartList);
  localStorage.setItem('mycartlist',JSON.stringify(lscartlist));

   const  addTocart = (cartproduct)=>{

    const updatedCartList = lscartlist.concat(cartproduct);

       setLsCartList(updatedCartList);
       
       dispatch({
            type:"ADD_TO_CART",
            payload:{
                addedProduct :lscartlist
        }
        })

    }

    const removeFromCart = (cartItem)=>{
        const updatedCartList = lscartlist.filter(cartListItem => cartListItem.id !== cartItem.id );

        setLsCartList(updatedCartList);
        

dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                removedProduct:lscartlist
         }
        })

    }

    
    const value1 = {
        cartList:lscartlist,
        addTocart,
        removeFromCart,

    };

    return (
        <CartContext.Provider value={value1}>
            {children}
        </CartContext.Provider>
        );
}

export const useCart = ()=>{
    const context = useContext(CartContext);
    return context; 
   
}