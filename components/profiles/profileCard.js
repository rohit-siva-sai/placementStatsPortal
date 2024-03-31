import { useData } from "@/useStore/useData";
import { PortableText } from "@portabletext/react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import Link from "next/link";
import React, { useState } from "react";
import { BsFilterCircle, BsLinkedin } from "react-icons/bs";
import { RiStarFill } from "react-icons/ri";
import ApplyFilter from "./applyFilter";

const client = createClient({
  projectId: "okpn4ty3",
  dataset: "production",
  useCdn: false,
});


const ProfileCard = () => {
  const builder = imageUrlBuilder(client);
  const [showFilter, setShowFilter] = useState(false);
  const [placement, setPlacement] = useState("top");
  const urlFor = (source) => builder.image(source);

  const [profiles, updateProfiles] = useData((store) => [
    store.profiles,
    store.updateProfiles,
  ]);

  const onClose = () => {
    setShowFilter(!showFilter);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="px-4 md:mx-36 py-4 md:py-4 msin-h-screen relative">
      {/* <Toaster/> */}
      <div
        onClick={showDrawer}
        className="md:hidden flex justify-end mx-4 pb-4"
      >
        <BsFilterCircle size={22} className="text-blue-400 " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16  ">
        {/* <Drawer
          placement={placement}
          width={800}
          height={825}
          className="rounded-l-3xl md:hidden block "
          open={showFilter}
          onClose={onClose}
        >
          <ApplyFilter />
        </Drawer> */}
        <div
          className={` md:block hidden md:col-span-3 shadow-lg shadow-blue-400 rounded-xl`}
        >
          <ApplyFilter
          // categoryFilter={categoryFilter}
          // filterDeveloper={filterDeveloper}
          />
        </div>
        {profiles?.length < 1 && (
          <picture className="place-self-center col-span-full md:col-span-9 ">
            <img
              src="https://img.freepik.com/premium-photo/white-people-examines-folder_58466-2854.jpg"
              alt=""
              className=""
            />
          </picture>
        )}
        <div className="flex flex-col space-y-4 col-span-full md:col-span-9 ">
          {profiles?.map((item) => {
            return (
              <div className="border relative  w-full flex flex-col space-y-5 px-8 py-5 rounded-xl cursor-pointer shadow-md shadow-blue-300 hover:shadow-xl hover:scale-105  hover:shadow-blue-300 transition-all  duration-500">
                <div className="flex  space-x-4 ">
                  <picture>
                    <img
                      src={urlFor(item?.image)?.url()}
                      alt=""
                      className="w-28 rounded-full"
                    />
                  </picture>
                  <div className="flex flex-grow justify-between self-start mt-1">
                    <div>
                      <p className="font-semibold text-gray-800 text-xl">
                        {item.name}
                      </p>
                      <p className="font-semibold text-gray-600 text-lg ">
                        {item.branch}
                      </p>
                      <p className="font-medium text-gray-400">{item.batch}</p>
                    </div>
                    <div className="mr-20">
                      <picture className="absolute top-2 right-2  ">
                        <img
                          src={item.companyUrl}
                          alt=""
                          className="w-24 rounded-xl"
                        />
                      </picture>
                      <div className="absolute bottom-4 right-4">
                        <Link href={""}>
                          <div className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#0275b3] text-white font-semibold hover:translate-y-2 hover:rounded-[50%] transition-all duration-500 ">
                            <BsLinkedin className="text-xl" />
                          </div>
                        </Link>
                      </div>
                      <p className="font-semibold text-orange-500 text-lg">
                        {item.companyName}
                      </p>
                      <p className="font-semibold text-gray-600">{item.role}</p>
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-gray-700 ml-4">
                  <PortableText value={item.bio} />
                </div>

                <div className="flex flex-col ml-4 space-y-2">
                  <div className="flex items-center space-x-2 pr-8 px-3 py-1 rounded-md justify-center mb-2 bg-gray-800 w-fit  ">
                    <RiStarFill className="text-yellow-400" />
                    <p className="text-white  text-sm font-semibold ">
                      Expert in
                    </p>
                  </div>
                  <div className="flex  space-x-3 overflow-x-auto">
                    {item.skills.map((skill) => {
                      return (
                        <div className="px-4  border rounded-md  font-semibold text-center text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-teal-500 bg-gradient-to-l  from-indigo-500  to-pink-500 transition-all duration-500 hover:scale-105 cursor-pointer flex items-center justify-center pb-1">
                          <p> {skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
