import {useState,useEffect} from 'react';

export function useFetch(path) {
    const [data,setData] = useState([]);
    
   const url = `http://localhost:3001/product?${path}`;

    useEffect(()=>{
        const fetchData = async ()=>{
          const response = await fetch(url);
          const respondedData = await response.json();
          setData(respondedData);
          // console.log(data);
      
        }
       fetchData();
      },[url])

    

  return ([data]);
}
