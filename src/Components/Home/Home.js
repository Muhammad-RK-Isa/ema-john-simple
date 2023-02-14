import React from 'react';
import Header from './../Header/Header';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Home;