import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';



const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth()
    useEffect(()=>{
        fetch('https://desolate-cove-99144.herokuapp.com/addOrders')
        .then(res => res.json())
        .then(data => setMyOrders(data))
        .catch(error=> console.log(error))
    }, [myOrders])
    // ----------------Handle My Orders------------------
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Order'd product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =  `https://desolate-cove-99144.herokuapp.com/addOrders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    
                    const remaining = myOrders.filter(product => product._id !== id);
                    setMyOrders(remaining)
                })
            } else {
              swal("Your Customer's order product is safe!");
            }
          });
     }
    const checkMyOrder = myOrders.filter(order => order.email === user.email)
    console.log(checkMyOrder);
    return (
        <div className="container mx-auto py-10  min-h-screen">
            <div className="bg-indigo-900 py-3">
                <h1 className="text-center text-3xl text-white md:text-6xl font-bold">My Orders Status </h1>
            </div>
           {
               checkMyOrder.map(order => <Zoom>
               
               <div key={order._id} className="grid border border-5 border-indigo-900 p-2 md:grid-cols-3 gap-4 mb-3">
                    {/* Product */}
                    <div className="sm:col-span-2 md:grid grid-cols-2 gap-4">
                    <div>
                        <img className="w-full" src={order.url} alt="" />
                   
                        <h1 className="text-2xl text-indigo-900 font-bold">Status : {order.status}</h1>
                        <h2 className="text-xl md:text-2xl text-justify font-medium">{order.productName}</h2>
                        <h1 className="text-2xl text-justify">Price : {order.price}</h1>
                        {/* <p className="text-md text-justify">{order.description.substring(1, 150)}</p> */}
                    </div>
                    </div>
                    {/* User */}
                    <div className="grid lg:grid-cols-4 gap-2">
                        <div className=" flex md:block items-center">
                            {/* <img className="md:w-16 lg:w-full" src={order.userImg} alt="" /> */}
                        </div>
                        <div className="lg:col-span-3 text-left">
                            <h2 className="text-md font-bold text-indigo-900">{order.name}</h2>
                            <h2 className="text-md font-bold text-indigo-900">{order.email}</h2>
                            {/* <h2 className="text-md font-bold text-indigo-900">Age : {order.age}</h2> */}
                            <button onClick={()=> handleDelete(order._id)} className="bg-indigo-900 mt-3 hover:bg-indigo-500 text-yellow-50 hover:text-yellow-50 py-2 px-8 border-indigo-500 border-2 smooth-animation cursor-pointer mr-2">Delete</button>
                        </div>
                    </div>
                </div>
                 
               </Zoom>)
           }
        </div>
    );
};

export default MyOrders;