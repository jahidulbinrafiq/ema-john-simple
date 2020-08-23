import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props)
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
           <div>
             <img src={img} alt=""/>
            </div>
             <div>
                <h4 className="product-name">{name}</h4> 
                <br/>
                <p>
                <small>By:{seller}</small>
                </p>
                <p>${price}</p>    
                <p>
                    <small>Only {stock} left in stock-Order soon</small>
                </p>
                {/* using below btn onclick automatically call all the products ata  a time */}
                {/* <button className="main-btn" onClick={props.handleAddProduct(props.product)} > */}
                {/**solve this problem below the code */}
                <button className="main-btn" onClick={()=>{props.handleAddProduct(props.product)}} >  
                <FontAwesomeIcon icon={faShoppingCart } /> &nbsp; Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;