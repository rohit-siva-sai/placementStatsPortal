import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import {
  BsBrowserChrome,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

const ComMain = ({ company }) => {
  return (
    <div className=" pb-16">
      <div className="grid grid-cols-2 gap-x-8">
        <picture className="self-center justify-self-center">
          <img src={company?.imageUrl} alt="" className="w-[500px]" />
        </picture>
        <div className="flex flex-col space-y-12 self-center">
          <div>
            <p className="font-bold text-blue-400 text-4xl ">
              {company?.companyName}
            </p>
            <p className="font-medium text-gray-500">
              &nbsp;Pay Package : {company?.payPackage}
            </p>
          </div>
          <div className="font-semibold text-gray-600 indent-24  ">
            <PortableText value={company?.description} />
          </div>
          <div className="flex flex-col space-y-2 ml-auto mr-8">
            <p className="font-semibold text-gray-500 text-sm">
              Social Media Links
            </p>
            <div className="flex space-x-2">
              <Link href={company.linkedin}>
                <div className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#0275b3] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 ">
                  <BsLinkedin className="text-xl" />
                </div>
              </Link>
              <Link href={company?.instagram}>
                <div className="group flex justify-center p-2 rounded-md drop-shadow-xl  bg-gradient-to-br from-purple-400 to-pink-500 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 ">
                  <BsInstagram className="text-xl" />
                </div>
              </Link>
              <Link href={company?.twitter}>
                <div className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#090307] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 ">
                  <BsTwitterX className="text-xl" />
                </div>
              </Link>
              <Link href={company?.Website}>
                <div className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#ff4646] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 ">
                  <BsBrowserChrome className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComMain;
