import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productkeys=Object.keys(savedCart);
         const productCart=productkeys.map(key=>{
             const product=fakeData.find(pd=>pd.key===key)
             product.quantity=savedCart[key];
             return product;
         });
         setCart(productCart)
    },[])
    return (
        <div>
            <h1>Cart Item:{cart.length}</h1>
            {
                cart.map(pr=><ReviewItem key={pr.key} product={pr}></ReviewItem>)
            }
        </div>
    );
};

export default Review;