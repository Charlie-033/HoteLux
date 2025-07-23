import React from "react";
import CountUp from "react-countup";
import ReviewModal from "./ReviewModal";
import WebsiteReview from "./WebsiteReview";

const HotelStats = () => {
  return (
    <div className="">
      <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl pt-10">
        OUR ACHIVEMENTS
      </h1>
      <p className="text-center w-4/5 lg:w-3/5 mx-auto pb-12">Celebrating milestones that reflect our dedication to your experience! We're proud to have facilitated thousands of seamless bookings and earned glowing reviews from countless satisfied guests. Our commitment to excellence drives us to continually expand our offerings, ensuring every stay with us is truly exceptional.</p>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-35 px-12 mx-auto py-12 max-w-7xl"
      >
        <div className="text-4xl font-semibold">
          <CountUp end={15000} duration={4.75} separator="," />+
          <p className="text-xl">Bookings Completed</p>
        </div>
        <div className="text-4xl font-semibold">
          <CountUp end={8500} duration={4} separator="," />+
          <p className="text-xl">Happy Guests</p>
        </div>
        <div className="text-4xl font-semibold">
          <CountUp end={250} duration={4.5} />+
          <p className="text-xl">Hotels Available</p>
        </div>
        <div className="text-4xl font-semibold">
          <CountUp end={12500} duration={4.5} />+
          <p className="text-xl">Total Review</p>
        </div>
      </div>
      
    </div>
  );
};

export default HotelStats;
