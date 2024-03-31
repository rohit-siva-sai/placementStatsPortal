import React from "react";
import { HiLocationMarker, HiMail, HiX } from "react-icons/hi";
import {
  BsTelephoneFill,
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-24 border-t-2 outline-2 outline-sky-500 outline-offset-4 px-16">
      <div className="py-6 px-4 flex justify-between">
        <div className="flex space-x-4 items-start">
          <picture>
            <img
              src="https://th.bing.com/th/id/OIG1.CPFhh3OU9YYT8zRA04QT?pid=ImgGn"
              alt=""
              className="w-28 rounded-full"
            />
          </picture>
          <div className="flex flex-col space-y-2 mt-2">
            <p className="font-semibold text-gray-800 text-lg">
              Placement Stats
            </p>
            <p className="font-semibold text-gray-800 text-lg">
              Raghu Engineering College
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Link href={""}>
            <p className="text-gray-800 font-medium hover:text-blue-500 cursor-pointer hover:underline underline-offset-2">
              Comapnies
            </p>
          </Link>
          <Link href={""}>
            <p className="text-gray-800 font-medium hover:text-blue-500 cursor-pointer hover:underline underline-offset-2">
              Placement Desk
            </p>
          </Link>
          <Link href={""}>
            <p className="text-gray-800 font-medium hover:text-blue-500 cursor-pointer hover:underline underline-offset-2">
              Alumni Profile
            </p>
          </Link>
          <Link href={""}>
            <p className="text-gray-800 font-medium hover:text-blue-500 cursor-pointer hover:underline underline-offset-2">
              News And events
            </p>
          </Link>
        </div>
        <div className=" flex flex-col space-y-4  flex-wrap md:pl-20  md:mt-0  md:text-left text-center">
          <div className="flex items-start space-x-4  ">
            <HiLocationMarker className="text-blue-500 text-2xl " />
            <div className="flex flex-col font-medium text-gray-500">
              <span>Dakamarri</span>
              <span>Bheemunipatnam Mandal</span>
              <span>Visakhapatnam - 531162</span>
            </div>
          </div>
          <div className="flex space-x-4  ">
            <BsTelephoneFill className="text-xl text-blue-500" />
            <div className="flex flex-col font-medium  text-gray-500">
              <span>08922-248001 / 248002 </span>
              <div className="flex flex-col mt-1 -space-y-1">
                <span>9704281376</span>
                <span>(training and placements)</span>
              </div>
            </div>
          </div>
          <div className="flex text-gray-500 font-medium space-x-4  ">
            <HiMail className="text-2xl text-blue-500" />
            <span>info@raghunggcollege.in</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2 ">
          <p className="font-medium text-gray-800 ">Follow Us on</p>
          <div className="flex space-x-2">
            <Link href={""}>
              <div
              
                className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#3964ef] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 "
              >
                <BsFacebook className="text-xl" />
              </div>
            </Link>
            <Link href={""}>
              <div
                
                className="group flex justify-center p-2 rounded-md drop-shadow-xl  bg-gradient-to-br from-purple-400 to-pink-500 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 "
              >
                <BsInstagram className="text-xl" />
              </div>
            </Link>
            <Link href={""}>
              <div
                
                className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#090307] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 "
              >
                <BsTwitterX className="text-xl" />
              </div>
            </Link>
            <Link href={""}>
              <div
                
                className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#ff4646] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 "
              >
                <BsYoutube className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
