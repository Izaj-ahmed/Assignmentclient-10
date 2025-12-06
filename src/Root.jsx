import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;