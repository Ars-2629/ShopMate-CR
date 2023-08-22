
export function Cards({carddata,cartlist}) {
  return (
 
  cartlist ? (
  <div className="max-w-xs p-2 border shadow-md ml-8 mb-5">
  <div>
    <img
      src={`./assets/images/${carddata.id}.png`}
      className="border w-96 h-48"
      alt=""
    />
    <h1 className="text-md my-3 font-[Bebas]">{carddata.name}</h1>
    
  </div>

  <div className="flex justify-between">
    <span className="text-lg">${carddata.price}</span>
    <button className="text-sm font-medium text-white bg-blue-900 px-2 py-1 rounded">
      Add To Cart
    </button>
  </div>
</div>) : (

  <div className="w-[450px] sm:w-[1200px] p-2 border sm:my-2 my-1 shadow-md ">
   <div className="flex justify-between items-center">
   <img
      src={`./assets/images/${carddata.id}.png`}
      className="border w-16 h-12"
      alt=""
    />
  <div className="sm:w-[400px] w-[190px]">
  <h1 className="text-xs my-3 sm:mx-4 mx-0">{carddata.name}</h1>
  </div>
  
  <div>
  <span className="sm:text-sm text-xs">${carddata.price}</span>
    </div>    
    
   <button className="sm:text-sm text-[10px] sm:font-medium font-normal text-white bg-red-500 px-2 py-1 rounded">
      Remove
    </button>

  </div>

  </div>
)
 
)
}
