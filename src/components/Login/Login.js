import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import useAuth from '../../hooks/useAuth';
const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }





    return (
        <div style={{minHeight: '500px'}} className="flex items-center justify-center">
            <div className="w-full p-4 max-w-lg shadow-2xl">
                <h1 className="text-yellow-600 font-bold capitalize text-2xl mb-2">Please login</h1>
                <span className="mt-1 text-red-600 text-md md:text-lg">{authError}</span>
                <form onSubmit={handleLoginSubmit}>
                    <input onChange={handleOnChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium"  label="Your Email"
                            name="email"
                            placeholder="E-mail" />
                    <input  onChange={handleOnChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium"     label="Your Password"
                            type="password"
                            name="password"
                            placeholder="Password" />
                    <button  type="submit" className="text-lg text-yellow-100 font-medium bg-yellow-600 hover:bg-transparent py-1 px-8 shadow-inner hover:shadow-inner border-2 hover:text-yellow-600 border-yellow-500">Login</button>
                    {isLoading && <div class="flex justify-center items-center">
  <div
    class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
  ></div>
</div>}
    
                </form>
                <div className="flex justify-between py-2">
                    <span className="text-yellow-900 text-lg font-medium">Are you new user? </span>
                    <Link className="text-yellow-900 text-lg font-medium" to="/register"> Register now</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;