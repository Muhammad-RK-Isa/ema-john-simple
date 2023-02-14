import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SummaryPannel = (props) => {

    const totalShipping = props.cart.reduce((sum, product) => sum + product.shipping, 0);
    const totalItems = props.cart.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = props.cart.reduce((sum, product) => sum + product.price, 0) * totalItems;
    return (
        <div>
            <h1 className="text-4xl text-left">Review your orders</h1>
            <div className='text-left flex flex-col items-center justify-start'>
                <div className="flex flex-col gap-2">
                    <h1 className='text-4xl font-bold'>Summary</h1>
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
            </div>
        </div>
    );
};

export default SummaryPannel;