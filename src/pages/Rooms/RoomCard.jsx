import React from "react";
import { FaBed, FaRulerCombined, FaStar, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const RoomCard = ({ room }) => {
  const {
    _id,
    galleryImages,
    roomName,
    basePrice,
    shortDescription,
    roomCapacity
  } = room;
  const navigate = useNavigate();
  const roomDetails = () => {
    return navigate(`/rooms/${_id}`);
  };

  const avarageRatings = () => {
    if (!room.reviews || room.reviews.length === 0) return 0;
    const total = room.reviews.reduce(
      (total, review) => total + review.ratings || 0,
      0
    );
    return total / room.reviews.length || 0;
  };
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={roomDetails}
      className="max-w-md rounded-lg overflow-hidden shadow-md "
    >
      <div className="relative h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={galleryImages[0]?.url || ""}
          alt={galleryImages[0]?.alt || roomName}
        />
        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
          <span className="text-gray-700 text-sm font-semibold">FROM</span>
          <span className="text-2xl font-bold text-gray-900 ml-1">
            ${basePrice.amount}
          </span>
        </div>
      </div>

      {/* Room Details Section */}
      <div className="p-4">
        <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
          <span className="flex items-center">
            <FaRulerCombined className="mr-1 text-base" />{" "}
            {roomCapacity.roomArea}
          </span>
          <span className="flex items-center">
            <FaUserFriends className="mr-1 text-base" />{" "}
            {roomCapacity.maxPersons} PERSON
          </span>
          <span className="flex items-center">
            <FaBed className="mr-1 text-base" /> {roomCapacity.numBeds} KING
            BEDS
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex justify-between">
          {roomName}
        </h3>
        <p>
          <span className="text-sm flex items-center">
            Ratings : <FaStar className="text-yellow-500 px-1 text-2xl" />{" "}
            {avarageRatings().toFixed(1)}
          </span>
        </p>
        <p className="text-gray-700 text-sm">{shortDescription}</p>
      </div>
    </motion.div>
  );
};

export default RoomCard;
