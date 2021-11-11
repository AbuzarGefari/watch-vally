import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
          fetch('http://localhost:5000/products')
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => console.log(error));
    },[products])
    return (
        <div className="bg-white">
            <div className="container mx-auto px-2 grid lg:grid-cols-3 sm:grid-cols-2 gap-3 py-10">
                {
                    products.slice(0,6).map(product=> <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;