import { useFetch } from '../hooks/useFetch';
import { Cards } from '../components/Cards';
import { useTitle } from '../hooks/useTitle';

export function ProductList({urlPath,cartlist,title}) {
const [data]=useFetch(urlPath);

useTitle(title);
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
