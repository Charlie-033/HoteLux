import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import RoomCard from "../pages/Rooms/RoomCard";
import FeatureCard from "./FeatureCard";

const FeaturedRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`${import.meta.env.VITE_ROOT_URL}/top-rated`)
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

  return (
    <div>
      <h1 className='text-center font-semibold text-3xl md:text-4xl lg:text-5xl pt-10'>TOP RATED ROOMS</h1>
      <p className='text-center w-4/5 lg:w-3/5 mx-auto pb-12'>Top-rated rooms epitomize luxury and comfort, consistently exceeding guest expectations. These premier accommodations often feature expansive layouts, premium amenities, breathtaking views, and exclusive services like personalized butler assistance. Guests choose them for an unforgettable, indulgent experience where every detail caters to an exceptional stay.</p>
      {
        rooms.length === 0 && <h1 className='text-center font-semibold text-3xl pt-10'>No Rooms Found!</h1>
      }
      <div className="w-full flex justify-center">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10 px-4'>
                {
                    rooms.map((room, index) => <FeatureCard key={index} room={room} ></FeatureCard>)
                }
            </div>
      </div>
    </div>
  );
};
export default FeaturedRoom;
