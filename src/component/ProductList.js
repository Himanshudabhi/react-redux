import React from "react";

import ProductCard from "./ProductCard";
// import "./CryptoList.css";

const ProductList = ({ api }) => {
    return (
        <div className='crypto_list'>
            <div className="row">
                {api.map((item, index) => {
                    return (
                        <div className="col-lg-3 col-md-3 col-12">
                           <ProductCard
                                // key={index}
                                // img={coin.img}
                                // rating={coin.rating}
                                // title={coin.title}
                                // price={coin.price}
                                key={item.id} {...item}
                            />
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;