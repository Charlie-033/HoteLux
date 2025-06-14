import React from "react";
import { FaBed, FaRulerCombined, FaStar, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion } from "motion/react"

const BookingCard = ({ booking }) => {
  const {_id, galleryImages, roomName, basePrice, roomCapacity } =
    booking.room;
    const navigate = useNavigate()
    const roomDetails = () => {
        return navigate(`/rooms/${_id}`)
    }
    const avarageRatings = () => {
    if (!booking.room.reviews || booking.room.reviews.length === 0) return 0;
    const total = booking.room.reviews.reduce(
      (total, review) => total + review.ratings || 0,
      0
    );
    return total / booking.room.reviews.length || 0;
  };
  return (
    <motion.div whileHover={{y:-5}} transition={{duration: 0.3}} onClick={roomDetails} className="max-w-md  rounded-lg overflow-hidden shadow-md">
      <div className=" h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={galleryImages[0]?.url || ""}
          alt={galleryImages[0]?.alt || roomName}
        />
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
        
        <p className="text-gray-700 text-md"><strong>Booking Amount : </strong><span className="text-2xl">{basePrice.amount}$</span></p>
        <p className="text-gray-700 text-sm"><strong>Booking Date : </strong>{booking.date}</p>
        <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span className="flex items-center">
                        <strong>Ratings :  </strong> <FaStar className="text-yellow-500 mx-1" />{" "}
                        <span className="mr-2">{avarageRatings()}</span>{" "}
                      </span>
                    </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;
