import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MoreProduct = () => {
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
                    products.map(product=> <div key={product._id} >


<div className="bg-white shadow-xl smooth-animation border-t-8 flex justify-between flex-col border-yellow-900 rounded-t-3xl hover:shadow-2xl p-4 pb-8">
            <div className="h-64 overflow-hidden rounded-t-2xl">
              <img className="min-h-full max-w-full transform scale-100 hover:scale-110 transition-all duration-500 ease-linear cursor-pointer" src={product.url} alt={product.name} />
            </div>
            <h2 className="mt-3 text-2xl font-medium">{product.name}</h2>
            <div className="text-2xl py-3 text-gray-900">Price: {product.price} Taka <br />
            </div>
            <div className="">
                {/* This is Divider */}
            </div>
            <p className="pt-3 pb-8 text-md text-gray-700 font-medium">{product.description.substring(0, 130)} <br /> </p>
            <Link className="smooth-animation bg-indigo-700   hover:bg-indigo-900 text-indigo-50 hover:text-yellow-50 border-2 py-2 px-8" to={`/products/${product._id}`}>Booking Now</Link>
        </div>



                    </div>)
                }
            </div>
        </div>
    );
};

export default MoreProduct;