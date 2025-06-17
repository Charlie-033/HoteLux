🌐 Live Website

👉 https://hotel-booking-platform-48b83.web.app/

📌 Project Purpose

This project is built to provide a seamless hotel booking experience with modern UI/UX design, authentication, real-time booking system, and reviews. It showcases a production-grade hotel booking portal where users can interactively explore rooms, filter by price, and share feedback.

🔑 Key Features

🏠 Home Page

Dynamic Banner with CTA button to Rooms page

Map displaying hotel location via react-leaflet

Featured Rooms (Top Rated)

Customer Review Carousel (Sorted by latest)

Special Offers Modal Popup on initial load

Extra two sections (e.g., Amenities and Services)

🔐 Authentication

Email & Password login/register with Firebase Auth

Google social login

Protected Routes with Firebase Access Token (JWT)

Client-side secure token storage using localStorage

🛏️ Rooms Page

Lists all rooms from database

Filter rooms by price range (Server-side filtering)

Clickable cards redirecting to Room Details page

📄 Room Details Page

Complete room info with image, amenities, pricing, etc.

List of all reviews with timestamp

Booking modal with date picker & availability check

Only authenticated users can book/review

📋 My Bookings

Shows only current user’s bookings

Cancel Booking with date logic (1 day prior)

Update Booking Date

Submit Review (Only if booked)

📝 Review System

Authenticated users can leave reviews for booked rooms

Reviews include name (read-only), comment, rating (1–5), and timestamp

Displayed in Room Details and Home carousel

🔒 Security

Firebase config secured via .env.local

All protected routes secured using JWT token verification

🎯 Extra Functionalities

SweetAlert/Toast notifications

404 Custom Page with animation and back-to-home button

Framer Motion animations

Implement dynamic title for routes

⚙️ Technologies Used

Frontend

React.js (Vite)

React Router DOM

Tailwind CSS + DaisyUI

Firebase Auth

React Hot Toast / SweetAlert2

React Icons

React Date Picker

React Helmet Async

React Leaflet (Map)

React Slick (Slider)

Framer Motion

Deployment

Client: Vercel 
