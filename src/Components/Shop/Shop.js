import React, { useState } from 'react';
import '../../fakeData';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
  
   //console.log(fakeData)
   const first10Data=fakeData.slice(0,10);
   const[products,setProducts]= useState(first10Data);
   //console.log(first10Data);

   const[cart,setCart]=useState([]);
   const handleAddProduct=(product)=>{
    //   console.log('product add',products)
       const toBeAddedKey=product.key;

       const sameProduct=cart.find(pd =>pd.key===toBeAddedKey);
       let count=1;
       let newCart;
       if(sameProduct){
         count=sameProduct.quantity+1;
         sameProduct.quantity=count;
         const others=cart.filter(pd=>pd.key!==toBeAddedKey);
         newCart=[...others,sameProduct];
       }
       else{
         product.quantity=1;
         newCart=[...cart,product]
       }
       setCart(newCart);
       addToDatabaseCart(product.key,count)
      
   }
    return (
        <div className='twin-container'>
          
          {/* <p>{products.length}</p> */}
          <div className="product-container">
              
           
                {
                products.map(product=><Product key={product.key}showAddProduct={true} handleAddProduct={handleAddProduct} product={product}></Product>)
                }
          
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
          
        </div>
    );
};

export default Shop;