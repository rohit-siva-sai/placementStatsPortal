import React from "react";
import { Bar } from "react-chartjs-2";

const data1 = {
  labels: ["2018", "2019", "2020", "2021", "2022"],
  datasets: [
    {
      label: "No of Companies",
      data: [36, 45, 85, 120, 155],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ["2018", "2019", "2020", "2021", "2022"],

  datasets: [
    {
      label: "Highest Package",
      data: [12, 18, 22, 28, 44],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const DataGraph = () => {
  return (
    <div className="md:my-16 my-12 mx-4 md:mx-16">
      <div>
        <p className="recruit font-semibold text-blue-500  hover:scale-105 transition-all duration-300 hover:underline text-xl md:text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
          Our Impeccabale Placement Record Over The Years
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-24 mt-12 ">
          <div className="border shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8  px-6">
            <p className="font-bold text-center text-xl text-gray-600">
              Companies Recruiting at Raghu College
            </p>

            <Bar data={data1} className="" />
          </div>
          <div className="border shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8  px-6">
          <p className="font-bold text-center text-xl text-gray-600">
              Highest Domestic Packages (in LPA)
            </p>
            <Bar data={data2} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGraph;
