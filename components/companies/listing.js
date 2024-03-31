import { useData } from "@/useStore/useData";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";

const Listing = () => {
  const [companies] = useData((store) => [store.companies]);
  return (
    <div className="mx-36 my-16">
      <div className="flex flex-col space-y-4">
        {companies.map((item) => {
          return (
            <Link href={`/company/${item.slug}`}>
              <div className="grid grid-cols-5 border py-6 group hover:bgs-gray-100/90 rounded-xl gap-x-10 px-4 cursor-pointer shadow-md shadow-blue-300 hover:shadow-xl hover:scale-105  hover:shadow-blue-300 transition-all  duration-500">
                <picture className="self-center">
                  <img src={item.imageUrl} alt="" className="  " />
                </picture>

                <div className="col-span-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold text-gray-700 text-xl">
                          {item.companyName}
                        </p>
                        <p className="text-gray-500 font-medium">
                          PayPackage : <span className="uppercase">{item.payPackage}</span>{" "}
                        </p>
                      </div>
                      <div>
                        <button class="border text-gray-50  duration-300 relative  cursor-pointer   overflow-hidden h-10 w-32 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-blue-400">
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-blue-200"></div>
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-blue-300"></div>
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-blue-400"></div>
                          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-blue-500"></div>
                          <p class="z-10 absolute bottom-2 left-2">Know More</p>
                        </button>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-600 indent-48  w-full text-justify  h-24 overflow-hidden ">
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
