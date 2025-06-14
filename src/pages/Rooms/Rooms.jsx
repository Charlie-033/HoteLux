import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import RoomCard from './RoomCard';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        axios(`${import.meta.env.VITE_ROOT_URL}/rooms`)
          .then((res) => {
            console.log(res.data)
          setRooms(res.data);
          setLoading(false);
        })
        .catch(err => {
            console.error("An error occured:", err);
            setLoading(false)
        })
      }, []);
      if (loading) return <Loader />;
       if (rooms.length === 0) return <p className='text-center text-2xl py-2 my-auto'>No rooms found!</p>;
    
    return (
        <div>
            <h1 className='pl-12 font-semibold text-3xl md:text-4xl lg:text-5xl py-10'>AVAILABLE ROOMS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 mx-auto pb-16'>
                {
                    rooms.map((room, index) => <RoomCard key={index} room={room} ></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;