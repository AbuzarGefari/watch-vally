import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://desolate-cove-99144.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
  },[products])


    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Order'd Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =  `https://desolate-cove-99144.herokuapp.com/Products/${id}`;
                fetch(url, {
                    method: 'delete'
                })
                .then(res => res.json())
                .then(data => {
                    
                    const remaining =products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
            } else {
              swal("Your Customer's order product is safe!");
            }
          });
     }
     



  
    return (
        <div className="bg-white">
        <div className="container py-12 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-6">
            {
                products.map(product=> <div key={product._id} >


<div className="bg-indigo-100 smooth-animation rounded-t-3xl hover:shadow-2xl p-4 pb-8">
        <div className="h-64 overflow-hidden rounded-t-2xl">
          <img className="min-h-full max-w-full transform scale-100 hover:scale-110 transition-all duration-500 ease-linear cursor-pointer" src={product.url} alt={product.name} />
        </div>
        <h2 className="mt-3 text-2xl font-medium">{product.name}</h2>
        <div className="text-2xl py-3 text-gray-900">TAKA {product.price}<br />
        </div>
        <div className="">
            {/* This is Divider */}
        </div>
        <p className="pt-3 pb-8 text-md text-gray-700 font-medium">{product.description.substring(0, 30)} <br /> {product.description.substring(0, 30)}</p>
        <button onClick={()=> handleDelete(product._id)} className="bg-indigo-900 hover:bg-indigo-500 text-red-50 hover:text-white-900 py-2 px-8 border-black-900 border-2 smooth-animation cursor-pointer mr-2">Delete product</button>
    </div>

    

                </div>)
            }
        </div>
    </div>
);
};
export default ManageProduct;