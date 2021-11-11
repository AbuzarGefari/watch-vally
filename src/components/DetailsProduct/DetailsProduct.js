import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';


const DetailsProduct = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('');
    const [imgUrl, setImgUrl] = useState('')
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(error => console.log(error))
    },[])

    const { register, handleSubmit } = useForm();
    const {url, description, name, price} = service
    const onSubmit = data => {
        data.status = 'Pending'
        data.serviceName = name
        data.price = price;
        data.description = description;
        data.url = url
        axios.post('http://localhost:5000/addOrders', data)
        .then(res => {
            if(res.data.insertedId){
                swal('Wow!', 'You\'r has been added.', 'success')
            }
          })
        };
    
    return (
        <div className="py-10">
            <div className="container mx-auto px-3 grid grid-cols-3"> 
            <h1 className="text-yellow-900 text-xl font-bold capitalize py-2">Order information</h1>
           <div>
               <img src={url} alt="" />
           </div>
           <div className="col-span-2 px-3">
               <h1 className="text-2xl text-yellow-900 font-bold">{name}</h1>
               <p className="text-md text-yellow-700 py-3">{description}</p>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-2 border-red-500 py-1 px-3" value={user.displayName} placeholder="Name" {...register("name", { required: true})} /> <br />
                    <input className="border-2 border-red-500 py-1 px-3" value={user.email} placeholder="Email" {...register("email", { required: true })} /> <br />
                    <input className="border-2 border-red-500 py-1 px-3" value={user.photoURL} placeholder="User img url" {...register("userImg", { required: true })} /> <br />
                    <input className="border-2 border-red-500 py-1 px-3" placeholder="Age" type="number" {...register("age", {required: true, min: 18, max: 75 })} placeholde="Age 18 to 75"/>
                    <input type="submit" value="Order"/>
                </form>
           </div>
        </div>
        </div>
    );
};

export default DetailsProduct;