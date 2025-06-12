import React from 'react';

const Explore = () => {
    return (
        <div>
            <h1 className='text-center font-semibold text-3xl md:text-4xl lg:text-5xl'>BEST OFFERS & PROMOTIONS</h1>
            <p className='text-center w-4/5 lg:w-3/5 mx-auto pb-12'>Unlock exclusive savings and elevate your stay with our best offers and promotions! Discover seasonal discounts, package deals, and special rates designed to make your visit unforgettable. From romantic getaways to family adventures and business trips, find the perfect offer to suit your needs and enjoy exceptional value at our hotel.</p>
            <h2 className='text-center text-2xl text-gray-800'>Contact Front Desk:</h2>
            <p className='text-center text-lg'>+123 456 789; +987 654 321</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-12 mx-auto py-10'>
                <div className='relative hover:cursor-pointer hover:scale-103 transition-transform duration-500'>
                    <img src="https://i.ibb.co/Y7L96Z0c/Explore-Poll.jpg" alt="" className='h-[400px] w-[700px] object-cover rounded hover:'/>
                    <p className='absolute bottom-[30px] lg:top-[180px] lg:left-[200px] text-red-200 text-2xl font-semibold  bg-opacity-50 px-3 py-2 rounded hover:underline'>Wellness Escape & Poll</p>
                </div>
                <div className='relative hover:cursor-pointer hover:scale-103 transition-transform duration-500'>
                    <img src="https://i.ibb.co/PZhDBMwz/Explore-Spa.jpg" alt="" className='h-[400px] w-[700px] object-cover rounded'/>
                     <p className='absolute bottom-[30px] lg:top-[180px] lg:left-[200px] text-orange-300 text-2xl font-semibold  bg-opacity-50 px-3 py-2 rounded hover:underline'>Spa & Wellness</p>
                </div>
                <div className='relative hover:cursor-pointer hover:scale-103 transition-transform duration-500'>
                    <img src="https://i.ibb.co/nxmhSYq/Explore-Yoga.jpg" alt="" className='h-[400px] w-[700px] object-cover rounded'/>
                     <p className='absolute bottom-[30px] lg:top-[180px] lg:left-[200px] text-blue-200 text-2xl font-semibold  bg-opacity-50 px-3 py-2 rounded hover:underline'>Mindful Yoga Escape</p>
                </div>
                <div className='relative hover:cursor-pointer hover:scale-103 transition-transform duration-500'>
                    <img src="https://i.ibb.co/tMDkSH78/Explore-Nature.jpg" alt="" className='h-[400px] w-[700px] object-cover rounded'/>
                     <p className='absolute bottom-[30px] lg:top-[180px] lg:left-[200px] text-green-200 text-2xl font-semibold  bg-opacity-50 px-3 py-2 rounded hover:underline'>Journey Through Nature</p>
                </div>
            </div>
        </div>
    );
};

export default Explore;