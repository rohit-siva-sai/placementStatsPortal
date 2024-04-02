import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdOutlineSegment } from "react-icons/md";
import { GiCrossedAxes } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const onClose = () => {
    setShowFilter(!showFilter);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="sticky top-0 left-0 z-50 shadow bg-white shadow-blue-300 ">
      <header className="text-gray-700  z-50 body-font">
        <div className="container md:mx-auto flex justify-between md:justify-start flex-wrap p-2 px-6 flex-row md:flex-row items-center">
          <div className="flex flex-row items-center ">
            <div>
              <picture>
                <img
                  src="./webLogo.jpeg"
                  alt=""
                  className="md:w-12 w-10 rounded-full"
                />
              </picture>
            </div>

            <Link href={"/"}>
              <div className="flex title-font font-medium items-center text-gray-700 mb-0 md:mb-0">
                <span className="ml-3 font-bold text-2xl ">
                  Placement Stats
                </span>
              </div>
            </Link>
          </div>
          {!showSideBar && (
            <div
              className=" md:hidden block"
              onClick={() => {
                showDrawer(true);
              }}
            >
              <MdOutlineSegment className="text-3xl text-gray-700" />
            </div>
          )}

          <div className="md:hidden block absolute px-4 py-12 ">
            <Drawer anchor={"left"} open={showFilter} onClose={onClose}>
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-col space-y-6 flex-wrap items-start text-base justify-center px-8 py-12">
            
                  <div
                    className="md:hidden block absolute top-4 right-4"
                    onClick={() => {
                      onClose(false);
                    }}
                  >
                    <GiCrossedAxes className="text-3xl text-red-500" />
                  </div>
                
                <Link href="/">
                  <div className="mr-8 hover:text-blue-500  font-semibold">
                    Home
                  </div>
                </Link>
                <Link href="/companies">
                  <div className="mr-8 hover:text-blue-500  font-semibold">
                    Companies
                  </div>
                </Link>
                <Link href="/placementDesk">
                  <div className="mr-8 hover:text-blue-500  font-semibold">
                    Placement cell
                  </div>
                </Link>
                <Link href="/alumniProfiles">
                  <div className="mr-8 hover:text-blue-500  font-semibold">
                    Alumni Profile
                  </div>
                </Link>
                <Link href="/newsandEvents">
                  <div className="mr-8 hover:text-blue-500  font-semibold">
                    News and Events
                  </div>
                </Link>
              </nav>
            </Drawer>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	md:flex hidden flex-wrap items-center text-base justify-center">
            <Link href="/">
              <div className="mr-8 hover:text-blue-500  font-semibold">
                Home
              </div>
            </Link>
            <Link href="/companies">
              <div className="mr-8 hover:text-blue-500  font-semibold">
                Companies
              </div>
            </Link>
            <Link href="/placementDesk">
              <div className="mr-8 hover:text-blue-500  font-semibold">
                Placement cell
              </div>
            </Link>
            <Link href="/alumniProfiles">
              <div className="mr-8 hover:text-blue-500  font-semibold">
                Alumni Profile
              </div>
            </Link>
            <Link href="/newsandEvents">
              <div className="mr-8 hover:text-blue-500  font-semibold">
                News and Events
              </div>
            </Link>
          </nav>
          {/* <Link href={"/model"} ><div className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 text-white rounded text-base mt-4 mr-2 md:mt-0">
          profile 
        </div></Link> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
