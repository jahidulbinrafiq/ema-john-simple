import React, { useState } from 'react';
import '../../fakeData';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
  
   //console.log(fakeData)
   const first10Data=fakeData.slice(0,10);
   const[products,setProducts]= useState(first10Data);
   //console.log(first10Data);

   const[cart,setCart]=useState([]);
   const handleAddProduct=(products)=>{
       console.log('product add',products)
       const newCart=[...cart,products]
       setCart(newCart);
   }
    return (
        <div className='shop-container'>
          
          {/* <p>{products.length}</p> */}
          <div className="product-container">
              
           
                {
                products.map(product=><Product handleAddProduct={handleAddProduct} product={product}></Product>)
                }
          
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
          
        </div>
    );
};

export default Shop;