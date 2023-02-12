import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SummaryPannel = (props) => {
    return (
        <div className='fixed z-10 text-left h-full w-[15vw] flex flex-col items-center justify-start right-4 lg:right-0 top-[85vh] lg:top-72'>
            <h2 className='w-full text-sm lg:text-xl text-black hidden lg:block'>Total Items in Cart : {props.cart.length} </h2>
            <div className='relative block lg:hidden cursor-pointer'>
                <h4 className="text-xs absolute top-[-0.5rem] right-0 bg-red-500 text-white text-center font-extrabold rounded-full py-1 px-2 max-w-min h-6 shadow-xl shadow-red-500">{props.cart.length}</h4>
                <FontAwesomeIcon icon={faShoppingCart} className='text-3xl p-4 bg-amber-400 rounded-full text-white shadow-2xl shadow-amber-300'></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SummaryPannel;