import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.history,loginData.name);
        e.preventDefault();
    }

    return (
        <div style={{minHeight: '500px'}} className="flex items-center justify-center">
            <div className="w-full p-4 max-w-lg shadow-2xl">
                <h1 className="text-2xl text-yellow-600 font-bold mb-3">Register please</h1>
                <span className="text-red-600 text-md md:text-lg ">{authError}</span>
               {!isLoading && <form onSubmit={handleLoginSubmit}>
                   
                    <input  onBlur={handleOnBlur} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" label="Your Name"
                            name="name"
                            placeholder="Full name" />
                  
                    <input onBlur={handleOnBlur} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" label="Your Email"
                            name="email"
                            type="email" placeholder="E-mail" />
                    <input onBlur={handleOnBlur} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium"  label="Your Password"
                            type="password"
                            name="password" placeholder="Password" />
                    <input onBlur={handleOnBlur} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" label="Your Password"
                            type="password"
                            name="password2" placeholder="Password" />
                    <button type="submit" className="text-lg text-yellow-100 font-medium bg-yellow-600 hover:bg-transparent py-1 px-8 shadow-inner hover:shadow-inner border-2 hover:text-yellow-600 border-yellow-500">Register</button>
                </form>}
                {isLoading && <div class="flex justify-center items-center">
  <div
    class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
  ></div>
</div>}
    

                <div className="flex justify-between py-2">
                    <span className="text-yellow-900 text-lg font-medium">Are You are already signed in? </span>
                    <Link className="text-yellow-900 text-lg font-medium" to="/login"> Login now</Link>
                </div>
               
            </div>
        </div>
    );
};

export default Register;