import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SummaryPannel = (props) => {

    const totalShipping = props.cart.reduce((sum, product) => sum + product.shipping, 0);
    const totalItems = props.cart.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = props.cart.reduce((sum, product) => sum + product.price, 0) * totalItems;
    return (
        <div className='fixed z-10 text-left h-full w-[15vw] flex flex-col items-center justify-start right-4 lg:right-1rem top-[85vh] lg:top-72'>
            <div className="lg:flex flex-col hidden gap-2">
                <h1 className='lg:text-4xl font-bold'>Summary</h1>
                <h2 className='text-xl'><span className="text-amber-400 text-2xl font-bold">{totalItems}</span> Items in Cart!</h2>
                <table>
                    <tr>
                        <td className='text-base'>Items:</td>
                        <td className='text-base text-right'>${totalPrice}</td>
                    </tr>
                    <tr>
                        <td className='text-base'>Shipping & Handling:</td>
                        <td className='text-base text-right'>${totalShipping}</td>
                    </tr>
                    <tr>
                        <td className='text-base'>Total(excluding tax)</td>
                        <td className='text-base text-right'>${totalShipping + totalPrice}</td>
                    </tr>
                    <tr>
                        <td className='text-base'>Tax(10%):</td>
                        <td className='text-base text-right'>${(totalPrice * 0.1).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='text-2xl text-amber-600 font-bold'>Order Total:</td>
                        <td className='text-2xl text-amber-600 font-bold text-right'>${Math.floor(totalPrice + totalPrice * 0.1 + totalShipping)}</td>
                    </tr>
                </table>
            </div>
            <Link to={"/order_review"}>
                <div className='relative block lg:hidden cursor-pointer'>
                    <h4 className="text-xs absolute top-[-0.5rem] right-0 bg-red-500 text-white text-center font-extrabold rounded-full py-1 px-2 max-w-min h-6 shadow-xl shadow-red-500">{totalItems}</h4>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-3xl p-4 bg-amber-400 rounded-full text-white shadow-2xl shadow-amber-300'></FontAwesomeIcon>
                </div>
            </Link>
        </div>
    );
};

export default SummaryPannel;