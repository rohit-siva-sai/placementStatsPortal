import React from "react";
import { useData } from "@/useStore/useData";
import { PortableText } from "@portabletext/react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "okpn4ty3",
  dataset: "production",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

const PastEvent = () => {
  const urlFor = (source) => builder.image(source);

  const [pastEvents] = useData((store) => [store.pastEvents]);

  const configDate = (date) => {
    const tempDate = new Date(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days_of_week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const mainDate = {
      month: months[tempDate.getMonth()],
      day: days_of_week[tempDate.getDay()],
      date: tempDate.getDate(),
      year: tempDate.getFullYear(),
    };
    // setEventDate(mainDate);
    return (
      <span>
        {mainDate.day} , {mainDate.month} {mainDate.date} , {mainDate.year}{" "}
      </span>
    );
  };

  return (
    <div className="md:mx-16 mx-4 my-16 md:my-16">
      <div>
        {pastEvents?.length >= 1 && (
          <p className="recruit font-semibold text-blue-500  hover:scale-105 transition-all duration-300 hover:underline text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
            Past Events
          </p>
        )}
        {pastEvents?.length < 1 ? (
          <div className="mt-12 font-semibold text-xl text-center text-gray-700">
            There are no Past events
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 mt-14 md:gap-x-12 gap-y-12">
            {pastEvents?.map((item) => {
              return (
                <div className="border pb-4 rounded-lg shadow-lg cursor-pointer  shadow-blue-400 hover:scale-105 duration-500 transition-all">
                  <picture>
                    <img
                      src={urlFor(item?.image)?.url()}
                      alt=""
                      className="rounded-t-xl h-72 mx-auto w-full"
                    />
                  </picture>
                  <div className="py-2 px-4">
                    <p className="font-bold text-lg text-emerald-600">
                      {configDate(item?.evnetDate)}
                    </p>
                    <div className="flex flex-col space-y-3 py-3">
                      <p className="font-semibold text-gray-800 text-lg">
                        {item?.heading}
                      </p>
                      <p className="font-medium text-gray-600">
                        {item?.conductedBy}
                      </p>
                      <div className="text-sm font-medium text-gray-500">
                        <PortableText value={item?.summary} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PastEvent;
