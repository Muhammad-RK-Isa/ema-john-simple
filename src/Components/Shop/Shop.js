import React, { useState } from 'react';
import Product from "../Product/Product";
import SummaryPannel from './../SummaryPannel/SummaryPannel';
const Shop = (props) => {
    const addToCart = props.addToCart;
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-6'>
                <div className='hidden lg:block'></div>
                <div className="lg:col-span-4 lg:border-r lg:pr-4 border-gray-300">
                    {
                        props.products.map(product => {
                            return (
                                <Product product={product} addToCart={addToCart} key={product.id}></Product>
                            )
                        })
                    }
                </div>
            </div>
            <SummaryPannel cart={props.cart}></SummaryPannel>
        </>
    );
};

export default Shop;