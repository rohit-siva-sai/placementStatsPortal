import React from "react";
import { Line } from "react-chartjs-2";

const LineTotal = ({ totalRecruitments }) => {
  const labels = ["2019", "2020", "2021", "2022"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "No of Students Selected",
        data: totalRecruitments,
        fill: false,
        backgroundColor: "#000",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="my-24 flex flex-col  align-middle">
      <p className="recruit font-semibold text-blue-500 hover:scale-105 transition-all duration-300 hover:underline text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
        Total Recruitment
      </p>
      <div className=" mt-10 self-center h-96 w-full  ">
        <Line data={data} className="h-full w-full mx-auto" />
      </div>
    </div>
  );
};

export default LineTotal;
