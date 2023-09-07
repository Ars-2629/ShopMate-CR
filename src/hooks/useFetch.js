import {useState,useEffect} from 'react';

export function useFetch() {
   
    const [storageList,setStorageList]=useState(JSON.parse(localStorage.getItem("productlist")) || [])
   
    localStorage.setItem("productlist",JSON.stringify(storageList));
    
   const url = 'http://localhost:3001/product';

    useEffect(()=>{
        const fetchData = async ()=>{
          const response = await fetch(url);
          const respondedData = await response.json();
    // setData(respondedData);
    
    setStorageList(respondedData);
        }
 fetchData();
      },[url])

    

  return ([storageList]);
}
