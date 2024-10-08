import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[10rem]">
      <h1 className="text-5xl font-bold uppercase text-red-600 mb-10">
        Access Denied !
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        You are restricted from accessing this page. Please sign in or create new account to continue.
      </p>
      <div className='flex gap-x-5'>

      <Link 
        to="/user_signin" 
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go to Sign In
      </Link>
      <Link 
        to="/user_signup" 
        className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Go to Sign Up
      </Link>
      </div>
    </div>
  );
}

export default Error;
