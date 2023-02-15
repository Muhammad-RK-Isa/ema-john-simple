import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromDb } from '../../utilities/fakedb';

const ProductDetails = (props) => {
    const { productID } = useParams();
    const product = props.products.find((product) => product.id === productID);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 p-4 gap-4 lg:gap-8'>
            <div className="lg:col-span-2">
                <img src={product.img} alt={product.category} />
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 lg:col-span-3 text-left">
                <h2 className='text-black text-2xl lg:text-4xl'>{product.name}</h2>
                <h3 className='text-sm lg:text-base'>Seller : <span className='text-indigo-700 font-bold cursor-pointer'>{product.seller}</span></h3>
                <h3 className='text-sm lg:text-base'>Ratings : {product.ratings} out of 5 || Total <span className="font-bold text-amber-500">{product.ratingsCount}</span> Reviews</h3>
                <hr className="w-full" />
                <div className="flex items-center lg:items-end gap-4 lg:gap-6">
                    <h2 className='text-black text-2xl lg:text-4xl'>${product.price}</h2>
                    <h3 className="text-smlg:text-base text-gray-500"><i><strike>${product.price + product.price * .2}</strike></i></h3>
                    <h3 className='text-sm lg:text-base'>Only <span className='text-red-500'>{product.stock}</span> items left!</h3>
                </div>
                <h3 className="text-sm lg:text-base">Brand : {product.seller}</h3>
                <h3 className="text-sm lg:text-base">Category : <span className="font-bold text-base lg:text-lg text-amber-500">{product.category}</span></h3>
                <button className='bg-amber-400 hover:bg-amber-500 rounded-md lg:px-16 py-1' onClick={() => { props.addToCart(product) }}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
                <button className='bg-red-400 hover:bg-red-500 rounded-md lg:px-16 py-1' onClick={() => { removeFromDb(product.id) }}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Remove Item</button>
                <hr className="w-full" />
                <h3 className="text-smlg:text-base underline">Description</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, cum? Perspiciatis laborum nulla corporis libero repellendus distinctio error, porro impedit.</p>
            </div>
            <div className=''></div>
        </div>
    );
};

export default ProductDetails;