import React from "react";
import{ Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";

const Home = () => {
  
  return (
    <div className=" flex justify-center min-h-full bg-purple-500">
      <div className=" min-h-full grid-place-items-center">
        <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            {/* <Link>
              <h1 className="p-1 font-serif font-extrabold">@markelldehaney</h1>
            </Link>
            <Link>
              {/* <h1 className="p-1 font-serif ">https://markelldehaney.netlify.app</h1> */}
              {/* <button className="py-3 px-6 text-white rounded-lg bg-red-400  hover:bg-red-700 shadow-lg block md:inline-block">Developer Portfolio</button> */}
            {/* </Link> */}
            <InfoCard/>
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

      





