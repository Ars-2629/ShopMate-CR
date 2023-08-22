import { useFetch } from '../hooks/useFetch';
import { Cards } from '../components/Cards';

export function ProductList({urlPath,cartlist}) {
const [data]=useFetch(urlPath);
console.log(cartlist);

 return (
   <main>
     <div className="mx-5 my-3 sm:mx-20 sm:my-8 flex justify-start flex-wrap">
       {data.map((d) => (
        <Cards carddata={d}  key = {d.id} cartlist={cartlist} />
       ))}
     </div>
   </main>
 );
}
