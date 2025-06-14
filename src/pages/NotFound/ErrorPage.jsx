import React from 'react';
import errorAnimation from '../../data/error_animation.json.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-200 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className=" flex items-center justify-center max-h-[420px] max-w-[420px] mx-auto">
        <Lottie animationData={errorAnimation}></Lottie>
        
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Lost in Space?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist. Maybe it was moved, or
          maybe it never existed in the first place.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
         Back Me Home
        </Link>

    
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;