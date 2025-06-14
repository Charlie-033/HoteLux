import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Loader from "../../components/Loader";
import UpdateModal from "../../components/UpdateModal";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios(`${import.meta.env.VITE_ROOT_URL}/my-bookings/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("An error occured:", err);
        setLoading(false);
      });
  }, [user?.email]);
  if (loading) return <Loader />;
  if ( bookings.length === 0) return <p className="text-center text-2xl py-2 my-auto">No rooms found!</p>;

  const handleUpdateUI = (updatedBooking) => {
    setBookings(prev =>
    prev.map(b => (b._id === updatedBooking._id ? updatedBooking : b))
  );
  }
  return (
   <div className="px-6 md:px-12 pb-16">
  <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl py-10">
    MY BOOKINGS
  </h1>

  <div className="overflow-x-auto rounded-lg shadow">
    <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
        <tr>
          <th className="px-6 py-4">Image</th>
          <th className="px-6 py-4">Room Name</th>
          <th className="px-6 py-4">Area</th>
          <th className="px-6 py-4">Capacity</th>
          <th className="px-6 py-4">Beds</th>
          <th className="px-6 py-4">Price</th>
          <th className="px-6 py-4">Booking Date</th>
          <th className="px-6 py-4">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {bookings.map((booking, index) => {
          const {
            _id,
            galleryImages,
            roomName,
            basePrice,
            roomCapacity,
          } = booking.room;

          return (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">
                <img
                  src={galleryImages[0]?.url || ""}
                  alt={galleryImages[0]?.alt || roomName}
                  className="w-20 h-14 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">{roomName}</td>
              <td className="px-6 py-4">{roomCapacity.roomArea}</td>
              <td className="px-6 py-4">{roomCapacity.maxPersons} Persons</td>
              <td className="px-6 py-4">{roomCapacity.numBeds} Beds</td>
              <td className="px-6 py-4 text-green-600 font-semibold">
                ${basePrice.amount}
              </td>
              <td className="px-6 py-4 text-gray-700">{booking.date}</td>
              <td className="px-6 py-4 space-y-2">
                <button
                  onClick={() => document.getElementById("booking_modal").showModal()}
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs"
                >
                  Update Date
                </button>
                <UpdateModal room={booking.room} booking={booking} handleUpdateUI={handleUpdateUI}/>
                <br />
                <button
                  // onClick={() => handleCancelBooking(booking._id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs"
                >
                  Cancel Booking
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyBookings;
