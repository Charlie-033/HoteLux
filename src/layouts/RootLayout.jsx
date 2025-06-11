import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar/>
            </header>
            <div className='flex-grow'>
                <Outlet/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;