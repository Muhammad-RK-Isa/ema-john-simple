import React from 'react';
import logo from "../../images/Logo.svg";
const Header = () => {
    return (
        <div className='sticky top-[-7rem] lg:top-[-12rem]'>
            <img className='h-28 lg:h-48 p-4 lg:p-10 mx-auto' src={logo} alt="" />
            <ul className='sticky top-0 bg-black w-full mx-auto flex justify-around lg:justify-start items-center text-left text-base lg:text-2xl text-white gap-4 lg:gap-6 p-4'>
                <li className='ml-0 lg:ml-4 sticky top-0'><a href="">Shop</a></li>
                <li><a href="">Order Review</a></li>
                <li><a href="">Manage Inventory here</a></li>
            </ul>
        </div>
    );
};

export default Header;