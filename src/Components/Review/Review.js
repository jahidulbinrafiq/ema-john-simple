import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from'../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart,setCart]=useState([]);
    const history=useHistory();
    // const [orderPlaced,setOrder]=useState(false);
   const handleProceedCheckOut=()=>{
    //    setCart([]);
    //    setOrder(false);
    //    processOrder();
      history.push(`/shipment`)
   }
    const  removeProduct=productkey=>{
           const newCart=cart.filter(pd=>pd.key!==productkey);
           setCart(newCart);
           removeFromDatabaseCart(productkey);
    }
    useEffect(()=>{
         const savedCart=getDatabaseCart();
  
         const productkeys=Object.keys(savedCart);
         const productCart=productkeys.map(key=>{
             const product=fakeData.find(pd=>pd.key===key)
            //  debugger;
              product.quantity=savedCart[key];
              return product;
         });
         setCart(productCart)
    },[])
//    let thanky;
//     if (orderPlaced){
//         thanky=<img src={happyImage} alt=""/>
//     }
    return (
        <div className="twin-container">
            {/* <h1>Cart Item:{cart.length}</h1> */}
           <div className="product-container">
           {
                cart.map(pd=><ReviewItem key={pd.key} product={pd}
                 removeProduct={removeProduct}
                ></ReviewItem>)
            }
           </div>
         
           <div className="cart-container">
                <Cart cart={cart}>
                <button className="main-btn" onClick={handleProceedCheckOut}>Proceed Checkout</button>
                </Cart>
           </div>
        </div>
    );
};

export default Review;