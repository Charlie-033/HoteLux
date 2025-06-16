import React, { useContext, useEffect, useState } from "react";
import {
  FaStar,
  FaCalendarAlt,
  FaRulerCombined,
  FaUserFriends,
  FaBed,
  FaDumbbell,
  FaPlaneDeparture,
  FaConciergeBell,
  FaBath,
  FaCocktail,
  FaWheelchair,
  FaSwimmingPool,
  FaWifi,
  FaArrowRight,
} from "react-icons/fa"; 
import Loader from "../../components/Loader";
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router";
import { PiHairDryer } from "react-icons/pi";
import { easeInOut, motion } from "motion/react"
import BookingModal from "../../components/BookingModal";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const {user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(id);
  useEffect(() => {
    axios(`${import.meta.env.VITE_ROOT_URL}/rooms/${id}`)
      .then((res) => {
        console.log(res.data);
        setRoom(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("An error occured:", err);
        setLoading(false);
      });
  }, [id]);
  if (!room || loading) {
    return <Loader />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  const avarageRatings = () => {
    if (!room.reviews || room.reviews.length === 0) return 0;
    const total = room.reviews.reduce(
      (total, review) => total + review.ratings || 0,
      0
    );
    return total / room.reviews.length || 0;
  };
  
  const handleBookingModal = () => {
    if(user?.email){
      document.getElementById("booking_modal").showModal()
    } else{
       Swal.fire({
              title: "You are not logged in! Please login first.",
              showClass: {
                popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
              },
              hideClass: {
                popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
              },
            });
      navigate("/login", {state:{from: location}})
    }
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      <div className="w-full overflow-hidden relative">
        <img
          src={
            room.galleryImages[0]?.url ||
            "https://via.placeholder.com/1200x400?text=Room+Image"
          }
          alt={room.galleryImages?.alt || room.roomName}
          className="w-full h-140 object-cover"
        />
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-700 font-semibold mb-1">
              FROM{" "}
              <span className="text-3xl text-gray-900 font-bold ml-1">
                ${room.basePrice.amount}
              </span>
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {room.roomName}
            </h1>
            <div className="flex items-center text-sm text-gray-600 space-x-4">
              <span className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />{" "}
                <span className="mr-2">{avarageRatings().toFixed(1)}</span>{" "}
                <span>({room.reviews.length} reviews)</span>
              </span>
            </div>
          </div>
          <motion.button onClick={handleBookingModal} className="btn btn-secondary" animate={{x:[0,10,0]}} transition={{repeat: Infinity, duration:2, ease: easeInOut}}>Book Now <FaArrowRight /></motion.button>
        </div>
        <BookingModal room={room}/>
        
        {/* Room Specifications */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Room Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 gap-x-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <FaRulerCombined className="text-blue-500 text-lg" />
              <span className="font-medium">Area:</span>{" "}
              <span>{room.roomCapacity.roomArea}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserFriends className="text-green-500 text-lg" />
              <span className="font-medium">Capacity:</span>{" "}
              <span>{room.roomCapacity.maxPersons} Person</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBed className="text-purple-500 text-lg" />
              <span className="font-medium">Beds:</span>{" "}
              <span>{room.roomCapacity.numBeds} King Beds</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {room.shortDescription}.
          </p>
          <p className="text-gray-700 leading-relaxed">{room.description}.</p>
        </div>

        {/* Amenities Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Amenities
          </h2>
          <p className="text-gray-600 mb-4">
            Omnesque iudicabit pri no, ad mal quaeque facilis atomorum.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {room.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                {amenity.icon === "plane-departure" && (
                  <FaPlaneDeparture className="text-gray-500" />
                )}
                {amenity.icon === "dumbbell" && (
                  <FaDumbbell className="text-gray-500" />
                )}
                {amenity.icon === "bed" && <FaBed className="text-gray-500" />}
                {amenity.icon === "concierge-bell" && (
                  <FaConciergeBell className="text-gray-500" />
                )}
                {amenity.icon === "bath" && (
                  <FaBath className="text-gray-500" />
                )}
                {amenity.icon === "cocktail" && (
                  <FaCocktail className="text-gray-500" />
                )}
                {amenity.icon === "dryer" && (
                  <PiHairDryer className="text-gray-500" />
                )}
                {amenity.icon === "wheelchair" && (
                  <FaWheelchair className="text-gray-500" />
                )}
                {amenity.icon === "swimming-pool" && (
                  <FaSwimmingPool className="text-gray-500" />
                )}
                {amenity.icon === "wifi" && (
                  <FaWifi className="text-gray-500" />
                )}
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* House Rules Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            House rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-500" />
              <span>
                Check in: {room.houseRules.checkInTime}, Check out:{" "}
                {room.houseRules.checkOutTime}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-gray-500" />
              <span>
                {room.houseRules.isPetFriendly
                  ? "Pet friendly"
                  : "No pets allowed"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-gray-500" />
              <span>
                {room.houseRules.noSmokingAllowed
                  ? "No smoking area"
                  : "Smoking allowed"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-gray-500" />
              <span>Keep belongings safe</span>
            </div>
          </div>
        </div>

        {/* Seasonal Pricing Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Seasonal Pricing
          </h2>
          <div className="space-y-4">
            {room.seasonalPricing.map((season, index) => (
              <div key={index} className="border-b pb-3 last:border-b-0">
                <p className="text-gray-800 font-medium">
                  {formatDate(season.startDate)} - {formatDate(season.endDate)}
                </p>
                <p className="text-xl font-bold text-gray-900 mt-1">
                  {season.rateType} ${season.price.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Review Section */}
        <div className="text-gray-800 space-x-4">
          <p className="text-xl py-2 font-semibold">Guest's Reviews</p>
          {room.reviews.length !== 0 ?
            room.reviews.map((review, index) => (
              <div key={index} className="p-3 bg-gray-100 mb-2 w-full">
                <strong>{review.user}</strong>{" "}
                <span className="text-xs italic">Author</span> 
                <p>{review.comment}</p>
              </div>
            )): <p className="underline text-sm">To know how users will add reviews, follow this...</p>}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
