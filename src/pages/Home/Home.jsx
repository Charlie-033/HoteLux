import React from 'react';
import Hero from '../../components/Hero';
import MapView from '../../components/MapView';
import Explore from '../../components/Explore';
import TopOffers from '../../components/TopOffers';
import HotelStats from '../../components/HotelStats';
import FeaturedRoom from '../../components/FeaturedRoom';
import SimpleSlider from '../../components/ReviewCarousel';

const Home = () => {
    return (
        <div>
            <Hero/>
            <MapView/>
            <FeaturedRoom/>
            <Explore/>
            <TopOffers/>
            <HotelStats/>
            <SimpleSlider/>
        </div>
    );
};

export default Home;