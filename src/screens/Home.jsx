import React from "react";
import Typical from "react-typical";

const Home = () => {
  
  return (

    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">Hi ,I'm Markell!</h1>
        <h4 className="text-3xl md:text-4xl lg:text-6xl"> I'm a{" "}
        <Typical
          className="typical"
          loop={Infinity}
          wrapper="b"
          steps={[
          "Developer.",
          2000,
          "Artist.",
          2000,
          "Bartender.",
          2000,]}
                  />
        </h4>
      </div>
    </div> 
  )
}

export default Home; 
