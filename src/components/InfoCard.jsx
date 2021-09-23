import React from "react";

const InfoCard = () => {
  return (
    <div className=" rounded-md bg-white  h-64 w-64 flex flex-wrap items-center  justify-center  ">
            <div className="container bg-white">
                <div className="flex justify-center px-5 mb-12">
                    <img className="h-32 w-32 bg-white p-2 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div className="">

                    {/* <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                        <p className="text-gray-400 mt-2">@immohitdhiman</p>
                        <p className="mt-2 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div> */}
                    {/* <div className="flex  bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span class="font-semibold">2.5 k </span> Followers</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span className="font-semibold">2.0 k </span> Following</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    
  )
}
export default InfoCard;
