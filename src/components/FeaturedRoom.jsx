import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const FeaturedRoom = () => {
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
   if (rooms.length === 0) return <p>No rooms found.</p>;

  return (
    <div>
      {rooms.map((room) => (
        <>
        <p key={room._id}>{room.roomName}</p>
        <img src={room.galleryImages?.[0]?.url} alt="" />
        </>
      ))}
    </div>
  );
};
export default FeaturedRoom;
