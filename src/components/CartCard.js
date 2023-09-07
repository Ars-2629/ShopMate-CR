import { useCart } from '../context/CartContext';

export function CartCard({cartdata}) {

  const { removeFromCart } = useCart();
    
  return (
    <div className="w-[450px] sm:w-[1100px] p-2 border sm:my-2 my-1 shadow-md">
    <div className="flex justify-between items-center">
    <img
       src={`./assets/images/${cartdata.id}.png`}
       className="border w-16 h-12"
       alt=""
     />
   <div className="sm:w-[400px] w-[190px]">
   <h1 className="text-xs my-3 sm:mx-4 mx-0">{cartdata.name}</h1>
   </div>
   
   <div>
   <span className="sm:text-sm text-xs sm:mr-0 mr-6">${cartdata.price}</span>
     </div>    
     
    <button className="sm:text-sm text-[10px] sm:font-medium font-normal text-white bg-red-500 px-2 py-1 rounded" 
    onClick = {()=> removeFromCart(cartdata)} >
       Remove
     </button>
 
   </div>
 
   </div>
  )
}
