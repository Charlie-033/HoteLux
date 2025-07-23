import React from 'react';
import { motion } from "motion/react"

const TopOffers = () => {
    return (
        <div className="w-full flex justify-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl pt-10">
      TOP OFFERS THIS WEEK
    </h1>
    <p className="text-center w-4/5 lg:w-3/5 mx-auto pb-12">
      Discover our exclusive 'Top Offers This Week' and experience exceptional value! Enjoy
      limited-time discounts on stays, complimentary upgrades, or unique package deals. Book now to
      secure your perfect escape and make the most of your visit with these unbeatable promotions.
    </p>

    {/* Grid wrapper centered and responsive */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        {/* Card 1 */}
        <div>
          <motion.img
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            src="https://i.ibb.co/jZJX7txw/Offer-breakfast.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded"
          />
          <h2 className="text-3xl text-blue-950 pt-3">Breakfast & Brunch</h2>
          <p>
            FROM <span className="text-4xl">70$</span>
          </p>
          <p className="py-3">
            Savor an exquisite luxury breakfast experience, featuring gourmet selections, fresh
            pastries, artisanal cheeses, and premium coffee, crafted for an indulgent start to your
            day.
          </p>
          <p className="text-blue-950 pb-3">14.06.2025 | 21.06.2025</p>
          <button className="bg-blue-950 w-full text-white p-3">BUY NOW</button>
        </div>

        {/* Card 2 */}
        <div>
          <motion.img
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            src="https://i.ibb.co/1JJLsQyN/Offer-retreat.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded"
          />
          <h2 className="text-3xl text-blue-950 pt-3">Exotic Retreat</h2>
          <p>
            FROM <span className="text-4xl">220$</span>
          </p>
          <p className="py-3">
            Escape to an Exotic Retreat: discover secluded luxury amidst breathtaking landscapes,
            where tranquility and unparalleled beauty await your senses. 🌴✨
          </p>
          <p className="text-blue-950 pb-3">14.06.2025 | 21.06.2025</p>
          <button className="bg-blue-950 w-full text-white p-3">BUY NOW</button>
        </div>

        {/* Card 3 */}
        <div>
          <motion.img
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            src="https://i.ibb.co/KcmjksMY/Offer-relax-weekend.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded"
          />
          <h2 className="text-3xl text-blue-950 pt-3">Relax Weekend</h2>
          <p>
            FROM <span className="text-4xl">120$</span>
          </p>
          <p className="py-3">
            Unwind and recharge this weekend! Enjoy serene comfort, delightful amenities, and a
            tranquil escape designed for your ultimate relaxation. Relaxation awaits you in
            style.
          </p>
          <p className="text-blue-950 pb-3">14.06.2025 | 21.06.2025</p>
          <button className="bg-blue-950 w-full text-white p-3">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default TopOffers;