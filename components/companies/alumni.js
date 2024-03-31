import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import React from "react";

const client = createClient({
  projectId: "okpn4ty3",
  dataset: "production",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

const Alumni = ({ alumni }) => {
  const urlFor = (source) => builder.image(source);
  return (
    <div className="">
      <div>
        <p className="recruit font-semibold text-blue-500  hover:scale-105 transition-all duration-300 hover:underline text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
          Alumni Selected
        </p>
        <div className="mt-12 grid grid-cols-3 place-items-center  ">
          {alumni.map((item) => {
            return (
              <div className="relative cursor-pointer">
                <div class="bg-sky-500 rounded-2xl w-fit shadow-lg shadow-sky-500 outline  outline-white -outline-offset-8">
                  <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-24 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16   before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16    flex justify-center  items-center h-80 w-56   bg-gray-800 hover:-translate-y-[125px] rounded-2xl outline outline-slate-400 -outline-offset-8">
                    <div class="z-10 flex flex-col items-center space-y-3  text-white place-items-center">
                      <div className="flex flex-col space-y-3">
                        <picture>
                          <img
                            src={urlFor(item?.image)?.url()}
                            alt=""
                            className="rounded-xl"
                          />
                        </picture>
                        <div className={`bg-white rounded-xl  w-fit `}>
                          <picture>
                            <img
                              src={item.companyUrl}
                              alt=""
                              className={` w-16 h-8  rounded-lg`}
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="text-start  text-sm">
                        <p className="text-lg">{item?.name}</p>
                        <p className="text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-56 h-28  flex flex-col justify-between pb-4   rounded-b-xl absolute bg-transparent border bottom-0 z-30">
                  <div className="w-full border border-gray-900"></div>
                  <div className="w-full border border-gray-900"></div>
                  <div className="w-full border border-gray-900"></div>
                  <div className="w-full border border-gray-900"></div>
                  <div className="w-full border border-gray-900"></div>
                </div>
              <picture className="absolute  bottom-0 z-10">
                <img src="https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg" alt="" className="w-56 h-28 rounded-b-xl" />
              </picture>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
