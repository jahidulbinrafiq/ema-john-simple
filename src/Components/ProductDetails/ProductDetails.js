import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productkey}=useParams();
    const product=fakeData.find(pr=>pr.key===productkey);
    // console.log(product)
    return (
        <div>
          <h3>{productkey} Details coming soon</h3>  
          <Product showAddProduct={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;