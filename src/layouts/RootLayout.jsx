import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../services/ScrollToTop';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <ScrollToTop/>
            <header className='sticky top-0 z-50'>
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