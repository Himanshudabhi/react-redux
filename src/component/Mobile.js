import React from 'react'
import ProductCard from '../component/ProductCard'
import ProductList from '../component/ProductList';
import { Pagination } from '../component/Pagination';




import axios from 'axios'
import { useState , useEffect  } from 'react';


const BaseUrl="https://6373a48b348e9472991266c7.mockapi.io/test";

const Mobile = () => {

    const [api, setapi] = useState([]);
    // const [currentpage, setcurrentpage] = useState(1)
    // const [postprepage, setpostprepage] = useState(8)

    const get = async()=>{
        const val = await axios.get(`${BaseUrl}`)
        setapi(val.data);
    }

    useEffect(() => {
        
        get();
    }, []);
    // const lastindex = currentpage * postprepage;
    // const firstpage = lastindex - postprepage;
    // const currentposts = api.slice(firstpage ,lastindex);
 

  return (
    <>
      <section id="home">
        
        <div className="container mb-5 pt-5">
      
         <div className="row">  
         
           {/* { api.filter(data => data.pro_id === 15).map((item)=>
              <div className="col-lg-3 col-md-3 col-12">
              <ProductCard key={item.id} {...item}></ProductCard>
              </div> )
           } */}
           { api.filter(data => data.pro_id === 15).map((item)=>
              <div className="col-lg-3 col-md-3 col-12">
              <ProductCard key={item.id} {...item}></ProductCard>
              </div> )
           }
           {/* <ProductList api={currentposts}></ProductList> */}
           {/* <Pagination totalposts={api.length} 
            postprepage={postprepage}
            setcurrentpage={setcurrentpage}
            currentpage={currentpage}
           ></Pagination> */}

           
           </div>
          </div>
      </section>  
    </>
  )
}

export default Mobile