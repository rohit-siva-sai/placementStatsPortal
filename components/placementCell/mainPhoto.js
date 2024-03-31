import React from "react";

const MainPhoto = () => {
  return (
    <div>
      <div className="relative">
        <picture>
          <img src="./placement.png" alt="" className="w-full md:h-[650px] h-64 " />
        </picture>
        {/* <picture>
          <img
            src="https://mkuniversity.ac.in/new/ptc/images/slider/ptc%20cell.jpg"
            alt=""
            className="w-full "
          />
        </picture> */}
        <div>
          {/* <div className="absolute top-24 left-[50%] -translate-x-[50%] bg-gray-900/40 px-8 py-4 text-white font-bold text-3xl rounded-xl">
            Welcome to Training and Placements Cell
          </div> */}
          <div className="absolute bottom-32 w-[500px] md:flex hidden  shadow-md shadow- left-36 bg-gray-900/40 px-8 py-4 text-white font-bold text-lg rounded-xl  flex-col space-y-3">
            <p className="text-xl underline decoration-2 decoration-teal-400  underline-offset-4 ">
              Training and Placement Cell
            </p>
            <p>
              The Placement Cell of our Regional Office handles all aspects of
              campus placements for the graduating students of all Departments.
              The Cell is well equipped with excellent infrastructure to support
              each and every stage of the placement process and also ensures
              best Training for students{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
