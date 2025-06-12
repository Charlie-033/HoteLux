import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://i.ibb.co/cKMXLs4y/banner-1.webp",
      title: "Secluded Paradise in the Seychelles",
      description:
        "Escape to an idyllic retreat overlooking the crystal-clear waters of the Seychelles. This luxurious resort, possibly an Aman property, offers unparalleled serenity with private infinity pools nestled amidst lush tropical foliage. Palm trees sway gently against a backdrop of the azure ocean, inviting guests to unwind and immerse themselves in the tranquility of this breathtaking island paradise.",
    },
    {
      src: "https://i.ibb.co/0ymFZXXL/banner-2.jpg",
      title: "Oasis of Luxury: Four Seasons Poolside Retreat",
      description:
        "Indulge in sophisticated relaxation at this exquisite Four Seasons resort pool, possibly in Surfside, Florida, or Chileno Bay. Lined with elegant cabanas and plush lounge chairs, the serene poolside ambiance invites guests to bask in the sun and unwind. Lush landscaping and the clear blue water create an ideal setting for a luxurious escape, offering both comfort and scenic beauty.",
    },
    {
      src: "https://i.ibb.co/Fkw5JQNs/banner-3.webp",
      title: "Dubai Grandeur: Luxury Room with City Views",
      description:
        "Experience the epitome of urban luxury in this spacious hotel room, likely at The St. Regis Downtown Dubai. Floor-to-ceiling windows offer breathtaking panoramic views of the iconic Dubai skyline, including the majestic Burj Khalifa. The elegant decor, featuring plush furnishings and modern design, creates a sophisticated and comfortable retreat perfect for enjoying the vibrant cityscape.",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="pb-5 border-b-4 border-blue-950">
      <div className="relative w-full h-[700px] overflow-hidden">
        {images.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200 ease-in-out ${
              i === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          />
        ))}

        {/* Static text content on top */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white drop-shadow-lg">
            Explore Your <br /> Luxury
          </h1>
          <div className="mt-4 bg-black/30 px-6 py-4 rounded-lg max-w-xl">
            <h2 className="text-xl font-semibold text-white">
              {images[currentIndex].title}
            </h2>
            <p className="text-sm text-gray-200 mt-2">
              {images[currentIndex].description}
            </p>
          </div>
          <div className="mt-5">
            <button className="btn bg-[#121258] border-none text-white">See Rooms</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
