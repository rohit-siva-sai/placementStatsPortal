import React from "react";

const ProfileCard = ({ name, role, photo, companyImage, direction }) => {
  return (
    <div class="bg-sky-500 rounded-2xl w-fit shadow-lg shadow-sky-500 outline  outline-white -outline-offset-8">
      <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-24 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16   before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16   hover:rotate-12 flex justify-center  items-center h-80 md:w-56 w-48  bg-gray-800 hover:-translate-y-24 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div class="z-10 flex flex-col items-center space-y-3  text-white place-items-center">
          <div className="flex flex-col space-y-3">
            <picture>
              <img src={photo} alt="" className="rounded-xl md:w-auto w-36" />
            </picture>
            <div className={`bg-white rounded-xl ${direction} w-fit `}>
              <picture>
                <img src={companyImage} alt="" className={` w-16 h-8  `} />
              </picture>
            </div>
          </div>
          <div className="text-start  text-sm">
            <p className="md:text-lg">{name}</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
