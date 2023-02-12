import React, { useState } from 'react';
import productsData from '../../fakeData/products.json';
import Product from "../Product/Product";
const Shop = () => {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6'>
            <div className='hidden lg:block'></div>
            <div className="lg:col-span-4 lg:border-r lg:pr-4 border-gray-300">
                {
                    products.map(product => {
                        return (
                            <Product
                                addToCart={addToCart}
                                product={product} key={product.id}
                            ></Product>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shop;