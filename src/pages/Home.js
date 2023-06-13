/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import { useState , useEffect  } from 'react';
import { Pagination } from '../component/Pagination';
import ProductList from '../component/ProductList';


const BaseUrl="https://6373a48b348e9472991266c7.mockapi.io/test";

const Home = () => {

    const [api, setapi] = useState([]);
    const [currentpage, setcurrentpage] = useState(1)
    const [postprepage, setpostprepage] = useState(8)


    const get = async()=>{
        const val = await axios.get(`${BaseUrl}`)
        setapi(val.data);
    }

    useEffect(() => {
        
        get();
    }, []);

    const lastindex = currentpage * postprepage;
    const firstpage = lastindex - postprepage;
    const currentposts = api.slice(firstpage ,lastindex);

  return (
    <>
      <section id="home">
        
        <div className="container mb-5">
      
         <div className="row">
          <ProductList api={currentposts}></ProductList>
           <Pagination totalposts={api.length} 
            postprepage={postprepage}
            setcurrentpage={setcurrentpage}
            currentpage={currentpage}
           ></Pagination>
          </div>
        </div>
      </section>  
    </>
  )
}

export default Home