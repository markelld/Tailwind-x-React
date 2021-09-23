import React from "react";
import { Link } from "react-router-dom";
const InfoCard = () => {
  return (
    <div className=" rounded-md bg-white  h-64 w-64 flex flex-wrap items-center  justify-center" style={{background:"#0F1108"}}>
            <div className="container bg-white" style={{background:"#0F1108"}}>
                <div className="flex justify-center px-5 mb-6">
                    <img className="h-32 w-32 bg-white p-1 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
                </div>
                <div className="">
                       <div className="flex">
                        <div className="text-center w-1/2 p-4 cursor-pointer">
                          
                          <Link>
                            <button className="py-3 px-3 text-white rounded-lg bg-red-400  hover:bg-red-700 shadow-lg block md:inline-block">Instagram</button>
                          </Link>
                        </div>
                        <div className="border"></div>
                          <div className="text-center w-1/2 p-4 cursor-pointer"> 
                          <Link>
                            <button className="py-3 px-3 text-white rounded-lg bg-red-400  hover:bg-red-700 shadow-lg block md:inline-block">Portfolio</button>
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}
export default InfoCard;
                          
                          
                            
