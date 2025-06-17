
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Loader from "../../components/Loader";
import UpdateModal from "../../components/UpdateModal";
import Swal from "sweetalert2";
import ReviewModal from "../../components/ReviewModal";
import AxiosSecure from "../../hooks/useHooks/axiosSecure";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { user } = useContext(AuthContext);
  const {axiosSecure} = AxiosSecure();
  // console.log(axiosSecure)
  useEffect(() => {
    axiosSecure.get(`${import.meta.env.VITE_ROOT_URL}/my-bookings/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("An error occured:", err);
        setLoading(false);
      });
  }, [user?.email, axiosSecure]);
  if (loading) return <Loader />;
  if (bookings.length === 0)
    return (
      <p className="text-center text-3xl py-2 my-auto">No Bookings Found!</p>
    );

  const handleUpdateUI = (updatedBooking) => {
    setBookings((prev) =>
      prev.map((b) => (b._id === updatedBooking._id ? updatedBooking : b))
    );
  };
  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel booking!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`${import.meta.env.VITE_ROOT_URL}/my-bookings/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              setBookings((prevBookings) =>
                prevBookings.filter((booking) => booking._id !== id)
              );
              Swal.fire({
                title: "Cancelled!",
                text: "Your booking has been cancelled.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            if (error.response?.status === 403) {
              Swal.fire({
                title: "Not allowed!",
                text: "Bookings can only be cancelled at least 1 day in advance.",
                icon: "error",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Something went wrong.",
                icon: "error",
              });
            }
          });
      }
    });
  };

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
              const { _id, galleryImages, roomName, basePrice, roomCapacity } =
                booking.room;

              return (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <img
                      src={galleryImages[0]?.url || ""}
                      alt={galleryImages[0]?.alt || roomName}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-lg text-gray-900">
                    {roomName}
                  </td>
                  <td className="px-6 py-4">{roomCapacity.roomArea}</td>
                  <td className="px-6 py-4">
                    {roomCapacity.maxPersons} Persons
                  </td>
                  <td className="px-6 py-4">{roomCapacity.numBeds} Beds</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    ${basePrice.amount}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{booking.date}</td>
                  <td className="px-6 py-4 space-y-2">
                    <button
                      onClick={() => {
                        setSelectedBooking(booking);
                        setSelectedRoom(booking.room);
                        setTimeout(() => {
                          document.getElementById("booking_modal").showModal();
                        }, 0);
                      }}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs w-27"
                    >
                      Update Date
                    </button>
                    <br />
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs w-27"
                    >
                      Cancel Booking
                    </button>
                    <br />
                    <button
                      onClick={() => {
                        setSelectedRoom(booking.room);
                        setTimeout(() => {
                          document.getElementById("review_modal").showModal();
                        }, 0);
                      }}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs w-27"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              );
            })}
            {selectedBooking && (
              <UpdateModal
                key={selectedBooking._id}
                room={selectedRoom}
                booking={selectedBooking}
                handleUpdateUI={handleUpdateUI}
              />
            )}
            <ReviewModal room={selectedRoom} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
