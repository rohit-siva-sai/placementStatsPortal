import { useData } from "@/useStore/useData";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React, { useState } from "react";

const Listing = () => {
  const [companies] = useData((store) => [store.companies]);
  const [filterComapanies, setFilterCompanies] = useState(companies);
  const filterComapany = (value) => {
    const data = companies.filter((item) =>
      item.companyName.toLowerCase().includes(value)
    );
    setFilterCompanies(data);
  };
  return (
    <div className="md:mx-36 mx-4 my-8 md:my-8">
      <div class="relative rounded-lg w-96 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-200 after:right-12 after:top-3 after:rounded-full after:blur-lg hover:shadow-md hover:shadow-gray-300">
        <input
          placeholder="Search by Company name ..."
          class="relative bg-transparent ring-0 outline-none  border-teal-500 text-neutral-700 placeholder-violet-700 rounded-lg focus:ring-violet-500 border-2 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 text-base font-semibold   "
          type="search"
          onChange={(e) => {
            filterComapany(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col space-y-4 mt-8  ">
        {filterComapanies.length < 1 && (
          <div className="flex  space-x-8 items-center">
            <picture>
              <img
                src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527130.jpg?w=740&t=st=1711959648~exp=1711960248~hmac=d5a20445bb8de7d3c57d70276005f5934e0421cb98b3c4b630291177f2dccb5e"
                alt=""
                className="w-48"
              />
            </picture>
            <p className="font-semibold text-xl text-gray-700">No Company Found with this Name</p>
          </div>
        )}
        {filterComapanies?.map((item) => {
          return (
            <Link href={`/company/${item.slug}`}>
              <div className="grid grid-cols-5 border py-6 group hover:bgs-gray-100/90 rounded-xl gap-x-10 px-4 cursor-pointer shadow-md shadow-blue-300 hover:shadow-xl hover:scale-105  hover:shadow-blue-300 transition-all  duration-500">
                <picture className="self-center md:col-span-1 col-span-2">
                  <img src={item?.imageUrl} alt="" className="  " />
                </picture>

                <div className="md:col-span-4 col-span-3">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold text-gray-700 text-xl">
                          {item?.companyName}
                        </p>
                        <p className="text-gray-500 font-medium">
                          PayPackage :{" "}
                          <span className="uppercase">{item?.payPackage}</span>{" "}
                        </p>
                      </div>
                      <div className="md:block hidden">
                        <button class="border text-gray-50  duration-300 relative  cursor-pointer   overflow-hidden h-10 w-32 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-blue-400">
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-blue-200"></div>
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-blue-300"></div>
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-blue-400"></div>
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-blue-500"></div>
                          <p class="z-10 absolute bottom-2 left-2">Know More</p>
                        </button>
                      </div>
                    </div>
                    <p className="font-semibold md:block hidden text-gray-600 indent-48  w-full text-justify  h-24 overflow-hidden ">
                      <PortableText value={item?.description} />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Listing;
