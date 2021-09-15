import React from "react";


const Projects = () => {
  
  return (
    <div
    className="min-h-screen flex justify-center items-center flex-col">
    <h1 className="text-5xl font-dosis font-bold mb-10">Project Title</h1>
    <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
      <div className="flex justify-center items-center">
      <button
        className="px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl">
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">Website</p>
      </button>
      </div>
    </div>
  )
}



export default Projects;