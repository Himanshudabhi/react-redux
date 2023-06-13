import React from 'react'
import ProductCard from '../component/ProductCard'
import axios from 'axios'
import { useState , useEffect  } from 'react';


const BaseUrl="https://6373a48b348e9472991266c7.mockapi.io/test";

const Television = () => {

    const [api, setapi] = useState([]);
   
  

    const get = async()=>{
        const val = await axios.get(`${BaseUrl}`)
        setapi(val.data);
    }

    useEffect(() => {
        
        get();
    }, []);

  return (
    <>
      <section id="home">
        
        <div className="container mb-5 pt-5">
      
         <div className="row">
         
           { api.filter(data => data.pro_id === 23).map((item)=>
              <div className="col-lg-3 col-md-3 col-12">
              <ProductCard key={item.id} {...item}></ProductCard>
              </div> )
           }
           
           </div>
          </div>
      </section>  
    </>
  )
}

export default Television