import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './Review.css'

const Review = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
          console.log(data);
          axios.post('http://localhost:5000/ratings', data)
          .then(res=>{
              if(res.data.insertedId){
                swal("Wow!", "You're product has been added!", "success");
               
              }
          })
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="colo w-full max-w-xl p-8">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-dark-500" {...register("name", { required: true})} placeholder="Your Name"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-dark-500" {...register("description")} placeholder="Description min 50 letter"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-dark-500" {...register("url")} placeholder="Image Url"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-dark-500" type="number" {...register("number",{required: true, min: 0, max:5 })} placeholder="number min 0-max 5"/>
            
                   
                    <div className="align-middle">

                    <input className="smooth-animation m-5 py-8 py-2 px-10 bg-yellow-100 border-2 border-white align-middle hover:bg-indigo-800 text-lg font-medium cursor-pointer hover:text-white text-center" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;