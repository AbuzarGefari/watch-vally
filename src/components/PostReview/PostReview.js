import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const MoreProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
          fetch('http://localhost:5000/ratings')
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => console.log(error));
    },[products])
    return (
        <div className="bg-gray-300">
 <div className="text-center flex items-center justify-center">
<h1 style={{fontFamily: ` cursive`}} className="text-4xl md:text-6xl lg:text-8xl font-bold text-dark">User Riview</h1>
        <p className="text-2xl mt-10 text-dark">If you like our products please posative Review?</p>

</div>


            <div className="container mx-auto px-2 grid lg:grid-cols-3 sm:grid-cols-2 gap-3 py-10">
                
           


                {
                    products.map(product=> <div key={product._id} >


<div className=" flex items-center justify-center  flex-col border-yellow-900 rounded-t-3xl hover:shadow-2xl p-4 pb-8">
            <div className="h-64 overflow-hidden rounded-t-2xl">
              <img className="rounded-full h-24 w-24 flex items-center justify-center" src={product.url} alt={product.name} />
            </div>
            <h2 className="mt-3 text-2xl font-medium text-dark">{product.name}</h2>
            <div className="text-2xl py-3 text-gray-900 text-dark">Rating: <Rating
            initialRating={product.number}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            
            ></Rating><br />
            </div>

            <p className="pt-3 pb-8 text-md text-white-700 font-medium">{product.description.substring(0, 130)} <br /> </p>
        
        </div>



                    </div>)
                }
            </div>
        </div>
    );
};

export default MoreProduct;