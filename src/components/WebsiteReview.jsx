import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import AxiosSecure from "../hooks/useHooks/axiosSecure";

const WebsiteReview = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const {axiosSecure} = AxiosSecure();

  const handleSubmitReview = async() => {
    if (!rating || !comment || !user?.displayName || !user?.email) return;

    const newReview = {
      user: user.displayName,
      email: user.email,
      comment,
      ratings: rating
    };

    try {
      await axiosSecure.post(`${import.meta.env.VITE_ROOT_URL}/reviews`, newReview);
      Swal.fire("Review submitted!");

      document.getElementById("review_modal").close();
      setComment("");
      setRating(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <dialog id="review_modal" className="modal">
      <div className="modal-box w-full max-w-md">
        <h3 className="font-bold text-lg mb-4">Leave a Review</h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Rating (1–5)</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border p-2 rounded"
            >
              <option value="">Select rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="modal-action">
            <form method="dialog" className="flex justify-between w-full">
              <button
                type="submit"
                onClick={handleSubmitReview}
                className="btn btn-primary"
              >
                Submit
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default WebsiteReview;
