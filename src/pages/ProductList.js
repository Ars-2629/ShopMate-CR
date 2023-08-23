import { useFetch } from '../hooks/useFetch';
import { Cards } from '../components/Cards';
import { useTitle } from '../hooks/useTitle';

export function ProductList({urlPath,cartlist,title}) {
const [data]=useFetch(urlPath);

useTitle(title);
 return (
   <main className='font-[Bebas]'>
    {cartlist ? "" : <h1 className='sm:mx-[550px] sm:mt-3 sm:my-0 mx-48 my-3'>Cart Items : {data.length}</h1> }  
     <div className="mx-5 sm:mx-20 sm:my-8 flex justify-start flex-wrap ">  
       {data.map((d) => (
        <Cards carddata={d}  key = {d.id} cartlist={cartlist} />
       ))}
     </div>
   </main>
 );
}
