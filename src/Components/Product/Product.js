import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, price, stock, ratingsCount, category } = props.product;
    return (
        <div className='w-full grid grid-cols-2 lg:grid-cols-3 border-b border-gray-300 p-4 pr-0 lg:pr-4 lg:pl-0 gap-6 cursor-pointer'>
            <div className="col-span-1">
                <img src={img} alt={category} />
            </div>
            <div className="col-span-1 lg:col-span-2 text-left grid">
                <h2 className='text-blue-600 text-base lg:text-2xl'><a href="">{name}</a></h2>
                <h3 className='text-xs lg:text-xl'>By: {seller}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
                    <div className="flex flex-col justify-center gap-1 lg:gap-4 mr-4 lg:mr-0">
                        <h2 className='text-base lg:text-4xl'>${price}</h2>
                        <h3 className='text-sm lg:text-xl'>Only <span className="text-red-400">{stock}</span> items left</h3>
                        <button className='bg-amber-400 hover:bg-amber-500 rounded-md lg:px-16 py-1' onClick={() => {console.log(props.addToCart(props.product))}}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
                    </div>
                    <div className="flex items-center justify-start text-xs lg:text-base text-amber-400">
                        <h3 className='text-xs lg:text-xl mr-1 text-black'>{ratingsCount} Reviews |</h3>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;