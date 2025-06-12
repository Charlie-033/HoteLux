import React from 'react';
import Hero from '../../components/Hero';
import MapView from '../../components/MapView';
import Explore from '../../components/Explore';
import TopOffers from '../../components/TopOffers';

const Home = () => {
    return (
        <div>
            <Hero/>
            <MapView/>
            <Explore/>
            <TopOffers/>
        </div>
    );
};

export default Home;