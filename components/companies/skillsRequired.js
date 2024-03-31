import React from "react";

const SkillsRequired = ({ skills }) => {
  return (
    <div className="mt-8 mx-4 mb-6 md:mb-12">
      <div>
        <p className="recruit font-semibold text-blue-500 hover:scale-105 transition-all duration-300 hover:underline text-2xl md:text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
          Skills Required to Get Hired
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-around  gap-y-6 md:gap-y-10   md:gap-x-10  mt-10 md:mt-14 md:mx-10">
          {skills?.map((item) => {
            return (
              <div className="px-4 py-2 border rounded-xl text-lg font-semibold text-center text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-teal-500 bg-gradient-to-l  from-indigo-500  to-pink-500 transition-all duration-500 hover:scale-105 cursor-pointer">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsRequired;
