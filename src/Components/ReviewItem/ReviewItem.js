import React from 'react';

const ReviewItem = (props) => {
    // console.log(props)
    const{name,quantity,key,price}=props.product;
    return (
        <div >
            <h4>{name}</h4>
           <p>Quantity:{quantity}</p>
            <p><small>Price:{price}</small></p>
           <button className="main-btn" onClick={()=>props.removeProduct(key)}>Remove</button>
           <hr/>
        </div>
    );
};


export default ReviewItem;