import React from "react";
import{ Link } from "react-router-dom";


const Home = () => {
  
  return (
    <div className=" flex justify-center min-h-full bg-purple-500">
      <div className=" min-h-full grid-place-items-center">
        <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            //link to instagram  
            <Link>
              <h1 className="p-1">@markelldehaney</h1>
            </Link>
            <Link>
              <h1 className="p-1">https://markelldehaney.netlify.app</h1>
            </Link>
          </div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
          <div className="bg-white rounded-md shadow-md h-64 w-64"></div>
        </div>
      </div>
    </div>
  )
}

export default Home; 

      





