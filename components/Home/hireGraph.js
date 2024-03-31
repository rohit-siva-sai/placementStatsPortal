import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
const data1 = {
  labels: ["CSE", "ECE", "EEE", "MECH", "CIVIL"],
  datasets: [
    {
      label: "No of Students Placed",
      data: [46, 79, 27, 73, 7],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};
const data2 = {
  labels: ["CSE", "ECE", "EEE", "MECH", "CIVIL"],
  datasets: [
    {
      label: "No of Students Placed",
      data: [112, 143, 77, 130, 11],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};
const data3 = {
  labels: ["CSE", "ECE", "EEE", "MECH", "CIVIL"],
  datasets: [
    {
      label: "No of Students Placed",
      data: [449, 549, 143, 218, 15],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

const HireGraph = () => {
  const [userData, setUserData] = useState({});

  // const userDataUpdation = () => {
  //   setUserData({
  //     labels: UserData.map((data) => data.year),
  //     datasets: [
  //       {
  //         label: "Users Gained",
  //         data: UserData.map((data) => data.userGain),
  //         backgroundColor: [
  //           "rgba(75,192,192,1)",
  //           "#ecf0f1",
  //           "#50AF95",
  //           "#f3ba2f",
  //           "#2a71d0",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  //     ],
  //   });
  // };

  // useEffect(() => {
  //   userDataUpdation();
  // });

  return (
    <div className="md:mt-24 mt-14 mb-16 mx-4 md:mx-16">
      <div>
        <p className="recruit font-semibold text-blue-500 hover:scale-105 transition-all duration-300 hover:underline text-3xl md:text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
          Placement Summary
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-0 gap-y-10 md:gap-x-10 mt-12 ">
          <div className="border shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8  px-6">
            <Pie data={data1} className="" />
            <div className="font-semibold text-gray-700 flex flex-col space-y-2 text-xl  text-center ">
              <p className="text-lg text-gray-500">Average Package: 3.3 LPA</p>
              <p>2020 Passout Placement Summary</p>
            </div>
          </div>
          <div className="shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8 px-6">
            <Pie data={data2} className="" />
            <div className="font-semibold text-gray-700 text-xl flex flex-col space-y-2  text-center ">
              <p className="text-lg text-gray-500">Average Package: 3.6 LPA</p>
              <p>2021 Passout Placement Summary</p>
            </div>
          </div>
          <div className="shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8 px-6">
            <Pie data={data3} className="" />
            <div className="font-semibold text-gray-700 text-xl flex flex-col space-y-2  text-center ">
              <p className="text-lg text-gray-500">Average Package: 4 LPA</p>
              <p>2022 Passout Placement Summary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireGraph;
