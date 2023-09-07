import { CartCard } from "../components/CartCard";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";

export  function Cart({title}) {
  const { cartList } = useCart();
 
let total = 0;
 cartList.forEach(list => total=total+list.price);
 

 useTitle(title);

  return (
    <main>
      <h1 className="text-center sm:mt-4 mt-2 ">Cart Items: {cartList.length} / $ {total} </h1>
       <div className="mx-5 sm:mx-20 sm:my-4 my-2 flex justify-start flex-wrap">
      {cartList.map((cartdata)=>(
        <CartCard cartdata={cartdata} key ={cartdata.id}/>
      ))}
    </div>
    </main>
   
  )
}
