import React from 'react';

const Orders = ({order}) => {
    console.log(order);
    const { url, name, productName, userImg, email,description, price, age} = order;
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Product */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                  <img className="w-full" src={url} alt="" />
              </div>
              <div>
                  <h2>{productName}</h2>
                  <h1>Price : {price}</h1>
                  
              </div>
            </div>
            {/* User */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <img className="w-full" src={userImg} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h2>{email}</h2>
                    <h2>Age : {age}</h2>
                </div>
            </div>
        </div>
    );
};

export default Orders;