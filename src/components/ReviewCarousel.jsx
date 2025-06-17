import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import WebsiteReview from "./WebsiteReview";
import { FaStar } from "react-icons/fa";

export default function SimpleSlider() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_ROOT_URL}/reviews`).then((res) => {
      setReviews(res.data);
    }, []);
  });
  const settings = {
    dots: false,
    infinite: reviews.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="px-12 mx-auto">
      <h2 className="text-3xl text-center">Our Customers Review</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <p className="text-lg font-semibold">
              {review.user} <span className="text-sm">Author</span>
            </p>
            <p className="text-md text-gray-600">{review.comment}</p>
            <p className="flex flex-col lg:flex-row justify-between text-sm">
              <span className="flex items-center text-md">Ratings: <FaStar className="px-1 text-xl text-yellow-500" /> {review.ratings}</span>
              <span>{review.createdAt}</span>
            </p>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center py-10">
        <button
          onClick={() => document.getElementById("review_modal").showModal()}
          className="btn btn-neutral"
        >
          Review Us
        </button>
      </div>
      <WebsiteReview />
    </div>
  );
}
