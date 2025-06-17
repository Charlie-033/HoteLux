import React from "react";

const PopupOffer = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center gap-10 z-50">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="relative bg-white rounded-2xl shadow-lg w-[220px] md:w-[400px] overflow-hidden">
        
        <img
          src="https://i.ibb.co/jZJX7txw/Offer-breakfast.jpg"
          alt="Special Offer"
          className="w-full h-32 md:h-64 object-cover"
        />
        <div className="p-1 md:p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">Breakfast & Brunch</h2>
          <p className="text-sm text-gray-600">
            Only for <span className="text-green-600 font-semibold"><span className="text-xl">70$</span></span>
          </p>
        </div>
      </div>
      <div className="relative bg-white rounded-2xl shadow-lg w-[220px] md:w-[400px] overflow-hidden">
        
        <img
          src="https://i.ibb.co/1JJLsQyN/Offer-retreat.jpg"
          alt="Special Offer"
          className="w-full h-32 md:h-64 object-cover"
        />
        <div className="p-1 md:p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">Exotic Retreat</h2>
          <p className="text-sm text-gray-600">
            Only for <span className="text-green-600 font-semibold"><span className="text-xl">220$</span></span>
          </p>
        </div>
      </div>
      <div className="relative bg-white rounded-2xl shadow-lg w-[220px] md:w-[400px] overflow-hidden">
        
        <img
          src="https://i.ibb.co/KcmjksMY/Offer-relax-weekend.jpg"
          alt="Special Offer"
          className="w-full h-32 md:h-64 object-cover"
        />
        <div className="p-1 md:p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">Relax Weekend</h2>
          <p className="text-sm text-gray-600">
            Only for <span className="text-green-600 font-semibold"><span className="text-xl">120$</span></span>
          </p>
        </div>
      </div>
      </div>
      <button
          className="text-white bg-red-500 px-3 py-2 hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
    </div>
  );
};

export default PopupOffer;

