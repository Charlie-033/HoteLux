import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-[url('https://i.ibb.co.com/cKMXLs4y/banner-1.webp')] bg-cover bg-center h-72 flex items-center justify-center">
        <div className=" p-6 rounded-lg">
          <h1 className="text-4xl font-bold text-white text-center">
            About Our Hotel
          </h1>
          <p className="text-white text-center mt-2 max-w-2xl">
            Experience unmatched comfort, elegance, and hospitality in the heart
            of the city.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded with the vision of creating a perfect home away from home, our
          hotel blends luxury with warmth. Every corner reflects our commitment
          to excellence — from meticulously designed rooms to personalized
          services that make you feel valued. Over the years, we have hosted
          travelers from all walks of life, each leaving with beautiful memories
          and a desire to return.
        </p>
      </section>

      {/* Facilities Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Our Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Luxury Rooms", desc: "Spacious, well-furnished rooms with premium amenities." },
              { title: "Fine Dining", desc: "Delicious meals prepared by world-class chefs." },
              { title: "Swimming Pool", desc: "Relax in our crystal-clear, temperature-controlled pool." },
              { title: "Spa & Wellness", desc: "Rejuvenating treatments for your body and mind." },
              { title: "Conference Hall", desc: "State-of-the-art facilities for business events." },
              { title: "24/7 Support", desc: "Round-the-clock assistance for a worry-free stay." },
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Prime location in the heart of the city.</li>
          <li>Exceptional hospitality from our trained staff.</li>
          <li>Affordable luxury with exclusive seasonal offers.</li>
          <li>Safe, secure, and family-friendly environment.</li>
          <li>Eco-conscious operations for a sustainable future.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Ready to Experience Luxury?
        </h2>
        <p className="text-blue-100 mt-2 mb-6">
          Book your stay with us today and enjoy an unforgettable experience.
        </p>
        <a
          href="/rooms"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition duration-300"
        >
          View Rooms
        </a>
      </section>
    </div>
  );
}
