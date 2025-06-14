import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext/AuthContext";

const BookingDialog = ({ room }) => {
  const { user } = useContext(AuthContext);

  const [selectedDate, setSelectedDate] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const checkAvailability = async (date) => {
    if (!date) return;
    setLoading(true);
    try {
      const formattedDate = date.toISOString().split("T")[0];
      console.log(room._id, formattedDate)
      const res = await axios.get(`${import.meta.env.VITE_ROOT_URL}/rooms/${room._id}/availability/${formattedDate}`)
      setIsAvailable(res.data.available);
    } catch (error) {
      setErrorMsg("Failed to check availability",error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      checkAvailability(selectedDate);
    } else {
      setIsAvailable(null);
    }
  }, [selectedDate]);

  const handleConfirmBooking = async () => {
    if (!selectedDate || !isAvailable) return;
    if(!user?.email) return
    const formattedDate = selectedDate.toISOString().split("T")[0];

    try {
      const booking = {
        roomId: room._id,
        userEmail: user?.email,
        date: formattedDate,
        price: room.basePrice.amount,
        createdAt: new Date(),
      };

      await axios.post(`${import.meta.env.VITE_ROOT_URL}/bookings`, booking);
      alert("Booking confirmed!");
      document.getElementById("booking_modal").close();
      setSelectedDate(null);
      setIsAvailable(null);
    } catch (err) {
      setErrorMsg("Booking failed: " + err.message);
    }
  };

  return (
    <>
      <dialog id="booking_modal" className="modal">
        <div className="modal-box w-full max-w-md">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>

          <div className="space-y-2 text-sm">
            <p><strong>Room:</strong> {room.roomName}</p>
            <p><strong>Price:</strong> ${room.basePrice.amount} {room.basePrice.currency}</p>
            <p><strong>Description:</strong> {room.shortDescription}</p>
            <p><strong>User:</strong> {user?.email}</p>
          </div>

          <div className="my-4">
            <label className="block mb-1 font-medium">Select Booking Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setErrorMsg("");
              }}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              className="border rounded px-2 py-1 w-full"
            />
            {loading && <p className="text-gray-500 text-sm mt-1">Checking availability...</p>}
            {!loading && isAvailable === true && <p className="text-green-600 text-sm mt-1">Room is available ✅</p>}
            {!loading && isAvailable === false && <p className="text-red-600 text-sm mt-1">Room is already booked ❌</p>}
            {!loading && isAvailable === null && <p className="text-blue-600 text-sm mt-1">Please select a date 📅</p>}
          </div>

          {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}

          <div className="flex justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => document.getElementById("booking_modal").close()}
            >
              Cancel
            </button>
            <button
              disabled={!isAvailable || !selectedDate}
              onClick={handleConfirmBooking}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BookingDialog;
