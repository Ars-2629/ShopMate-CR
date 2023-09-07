// import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ProductCard } from '../components/ProductCard';
import { useTitle } from '../hooks/useTitle';

export function ProductList({title}) {
const [storageList]=useFetch();

useTitle(title);

 return (
   <main className='font-[Bebas]'>
    
     <div className="mx-10 sm:mx-20 sm:my-4 flex justify-start flex-wrap">  
       {storageList.map((productdata) => (
        <ProductCard productdata={productdata} key = {productdata.id} />
       ))}
     </div>
   </main>
 );
}
