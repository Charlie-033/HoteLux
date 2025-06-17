import React, { useState } from 'react';
import Hero from '../../components/Hero';
import MapView from '../../components/MapView';
import Explore from '../../components/Explore';
import TopOffers from '../../components/TopOffers';
import HotelStats from '../../components/HotelStats';
import FeaturedRoom from '../../components/FeaturedRoom';
import SimpleSlider from '../../components/ReviewCarousel';
import DocumentTitle from '../../services/DocumentTitle';
import PopupOffer from '../../components/PopupOffer';

const Home = () => {
    DocumentTitle("Home");
    const [showModal, setShowModal] = useState(false);

    useState(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 1500)
        return () => clearTimeout(timer)
    },[])
    return (
        <div>
            <Hero/>
            <MapView/>
            <FeaturedRoom/>
            <Explore/>
            <TopOffers/>
            <HotelStats/>
            <SimpleSlider/>
            {showModal && <PopupOffer onClose={() => setShowModal(false)}/>}
        </div>
    );
};

export default Home;