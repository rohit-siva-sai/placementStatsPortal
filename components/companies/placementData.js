import React from 'react'
import { Pie } from 'react-chartjs-2'

const PlacementData = ({placementData}) => {

  
    const data1 = {
        labels: ["CSE", "ECE", "EEE", "MECH", "CIVIL"],
        datasets: [
          {
            label: "No of Students Placed",
            data: placementData[0]?.placement  ,
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
            data: placementData[1]?.placement,
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
            data: placementData[2]?.placement,
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


  return (
    <div className="md:mt-4 mt-12 mb-12 md:mx-16 ">
    <div>
      <p className="recruit font-semibold text-blue-500 hover:scale-105 transition-all duration-300 hover:underline text-3xl md:text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
        Placement Summary
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-10  mt-8 md:mt-12 ">
        <div className="border shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8  px-6">
          <Pie data={data1} className="" />
          <div className="font-semibold text-gray-700 flex flex-col space-y-2 text-xl  text-center ">
            {/* <p className="text-lg text-gray-500">Average Package: 3.3 LPA</p> */}
            <p>2020 Passout Placement Summary</p>
          </div>
        </div>
        <div className="shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8 px-6">
          <Pie data={data2} className="" />
          <div className="font-semibold text-gray-700 text-xl flex flex-col space-y-2  text-center ">
            {/* <p className="text-lg text-gray-500">Average Package: 3.6 LPA</p> */}
            <p>2021 Passout Placement Summary</p>
          </div>
        </div>
        <div className="shadow-lg shadow-blue-200 py-4 rounded-2xl flex flex-col space-y-8 px-6">
          <Pie data={data3} className="" />
          <div className="font-semibold text-gray-700 text-xl flex flex-col space-y-2  text-center ">
            {/* <p className="text-lg text-gray-500">Average Package: 4 LPA</p> */}
            <p>2022 Passout Placement Summary</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PlacementData
