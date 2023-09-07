export const cartReducer=(state,action)=>{
   
    const {type,payload}=action;

    switch(type){

     case "ADD_TO_CART":
        return {...state , cartList:payload.addedProduct};

    case "REMOVE_FROM_CART":
        return {...state,cartList:payload.removedProduct};

         default:
            throw new Error("No Case Found In cartReducer");
      
    }

}
   

