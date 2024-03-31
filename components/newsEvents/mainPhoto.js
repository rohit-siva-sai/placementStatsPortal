import React from "react";

const MainPhoto = () => {
  return (
    <div>
      <div className="relative">
        <picture>
          <img
            src="./events.jpg"
            alt=""
            className="w-full md:h-[700px]"
          />
        </picture>
        <div>
          <div className="absolute md:block hidden top-8 md:top-24 left-[50%] -translate-x-[50%] bg-gray-900/40 px-8 py-4 text-white font-bold text-2xl  md:text-4xl w-full md:w-fit  rounded-xl ">
            Welcome to News And Events
          </div>
          {/* <div className="absolute top-52  shadow-md shadow- left-[50%] -translate-x-[50%] bg-gray-900/40 px-8 py-4 text-white font-bold text-lg rounded-xl ">
            Discover and connect with past students who have successfully
            transitioned into the workforce. Engage in meaningful conversations,
            seek career advice, and expand your professional network. Explore
            the diverse experiences and achievements of our alumni community
            below.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
