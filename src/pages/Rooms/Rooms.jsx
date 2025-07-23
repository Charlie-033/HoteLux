import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import RoomCard from "./RoomCard";
import DocumentTitle from "../../services/DocumentTitle";

const Rooms = () => {
  DocumentTitle("Rooms")
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  useEffect(() => {
    let url = `${import.meta.env.VITE_ROOT_URL}/rooms`
    if(sortBy === "LowToHigh"){
      url+="?sort=LowToHigh"
    } else if(sortBy === "HighToLow"){
      url+="?sort=HighToLow"
    }else{
      url
    }
    axios(url)
      .then((res) => {
        console.log(res.data);
        setRooms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("An error occured:", err);
        setLoading(false);
      });
  }, [sortBy]);
  if (loading) return <Loader />;
  if (rooms.length === 0)
    return <p className="text-center text-2xl py-2 my-auto">No rooms found!</p>;

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <h1 className="px-12 font-semibold text-3xl md:text-4xl lg:text-5xl py-10 flex justify-between">
        AVAILABLE ROOMS
        <span className="text-lg">
        {" "}
        <label className="flex items-center gap-3 my-5">
          <span className=" font-semibold">Sort by :</span>
          <select
            name=""
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded "
          >
            <option className="dark:text-gray-200 dark:bg-gray-800" value="">
              Order
            </option>
            <option className="dark:text-gray-200 dark:bg-gray-800" value="LowToHigh">
              Low to High
            </option>
            <option
              className="dark:text-gray-200 dark:bg-gray-800"
              value="HighToLow"
            >
              High to Low
            </option>
          </select>
        </label>
      </span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-12 pb-16 ">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
