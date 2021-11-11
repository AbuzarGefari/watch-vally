import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import swal from 'sweetalert';


const AllOrderManage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch('https://desolate-cove-99144.herokuapp.com/addOrders')
        .then(res => res.json())
        .then(data => setOrders(data));

    },[orders])

    // __________________Handle Product Delete______________________
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
                const url =  `https://desolate-cove-99144.herokuapp.com/addOrders/${id}`;
                fetch(url, {
                    method: 'delete'
                })
                .then(res => res.json())
                .then(data => {
                    
                    const remaining = orders.filter(product => product._id !== id);
                    setOrders(remaining)
                })
            } else {
              swal("Your Customer's order product is safe!");
            }
          });
     }
     
    //  _________________Status Pending and Approved________________________
     const acceptOrderHandle = id => {
        swal({
            title: "Are you sure?",
            text: "Once Approved, you will not be able to unapproved this Ordered !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =  `https://desolate-cove-99144.herokuapp.com/addOrders/${id}`;
                fetch(url, {
                    method: 'PUT'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifyedCount > 0){
                        swal("Poof! Your Customer's Order Product has been Approved!", {
                            icon: "success",
                          }
                        )}
                })
                } else {
                swal("Product Approved Close!");
                }
            });
     }

     
    return (
        <div className="py-10 container mx-auto min-h-screen ">
           
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    orders.map(order => 
                        
                        <Zoom key={order._id} >
                         <div className="shadow p-2 flex justify-between flex-col">
                          <div>
                            <div className="grid grid-cols-4 gap-4 p-3 bg-indigo-900">
                                    <div>
                                        <img className="w-full" src={order.userImg} alt="" />
                                    </div>
                                    <div className="col-span-3">
                                        <h2 className="text-white ">{order.name}</h2>
                                        <h2 className="text-white ">{order.email}</h2>
                                        <h2 className="text-white ">{order.Location}</h2>
                                    </div>
                                </div>
                                <div className="">
                                <div className="overflow-hidden">
                                    <img className="w-full transform scale-100 hover:scale-110 smooth-animation cursor-pointer" src={order.url} alt="" />
                                </div>
                                <div className="py-3">
                                    <h3 className="text-xl font-bold text-indigo-800">Status : {order.status}</h3>
                                    <h2 className="text-2xl font-bold text-indigo-800 py-1">{order.productName}</h2>
                                    <h1 className="text-md font-bold text-indigo-800">Price : {order.price}</h1>
                                    {/* <p className="text-base font-medium text-yellow-900">{order.description.substring(0, 30)}</p> */}
                                </div>
                                <div className=" mb-4">
                                   <strong className="text-md text-indigo-900">Home Towns : {order.towns}</strong>
                                   <br />
                                   <strong className="text-md text-indigo-900">Country : {order.country}</strong>
                                   <br />
                                   {/* <strong className="text-md text-indigo-900">Post Office : {order.post_office}</strong> */}
                                </div>
                                </div>
                            </div>
                            <div className="s">
                            <button onClick={()=>acceptOrderHandle(order._id)} className="bg-indigo-900 hover:bg-indigo-500 text-red-50 hover:text-white-900 py-2 px-8 border-black-900 border-2 smooth-animation cursor-pointer">Confirm Order</button>

                                <button onClick={()=> handleDelete(order._id)} className="bg-indigo-900 hover:bg-indigo-500 text-red-50 hover:text-white-900 py-2 px-8 border-black-900 border-2 smooth-animation cursor-pointer mr-2">Delete order</button>
                            </div>
                        </div>
                        </Zoom>
                    )
                }
            </div>
        </div>
    );
};

export default AllOrderManage;