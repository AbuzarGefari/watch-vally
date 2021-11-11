import { Alert } from '@mui/material';
import React, { useState } from 'react';
 
const MakeAdmin = () => {
const [email, setEmail]= useState('')
const [success, setSuccess] = useState(false);

const handleOnChange = e => {


    
 setEmail(e.target.value)
}


    const handleSubmit = e => {
        const user = { email };
        fetch('https://desolate-cove-99144.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data=>{
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }


    return (
        <div style={{minHeight: '500px'}} className="flex items-center justify-center">
            <div className="w-full p-4 max-w-lg shadow-2xl">
             <h1>Make Admin</h1>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleOnChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium"  label="Your Email"
                            name="email"
                            placeholder="E-mail" />
                 
                 <button  type="submit" className="text-lg text-yellow-100 font-medium bg-yellow-600 hover:bg-transparent py-1 px-8 shadow-inner hover:shadow-inner border-2 hover:text-yellow-600 border-yellow-500">Make Admin</button>

    
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
               
            </div>
        </div>
    );
};

export default MakeAdmin;