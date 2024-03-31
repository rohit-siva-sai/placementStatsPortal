import React from "react";
import { BsDeviceHdd, BsStars } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiNumber1 } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
const RecruitProcess = ({ recruitProcess }) => {
  // console.log('dds',recruitProcess);

  return (
    <div className="md:mb-16 my-12 md:mt-24 overflow-x-hidden">
      <div>
      <p className="recruit font-semibold text-blue-500  hover:scale-105 transition-all duration-300 hover:underline text-3xl md:text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
         Recruitment Process
      </p>

      <div className="md:mt-16 mt-12">
      <VerticalTimeline lineColor="#60a5fa" >
          {recruitProcess?.map((item, index) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work  "
                contentStyle={{
                  //   background: "#9bda92",
                  //   color: "#fff",
                  border: "2px solid #60a5fa",
                  boxShadow: "2px 2px 10px 1px #60a5fa",
                  borderRadius: "10px"
                }}
                date={`STEP ${index + 1}`}
                contentArrowStyle={{
                  borderRight: "7px solid #60a5fa ",
                }}
                iconStyle={{
                  background: "#60a5fa",
                  color: "#fff",
                }}
                icon={<FaUserGraduate />}
               
              >
                <div className=" ">
                    <h3 className="font-semibold vertical-timeline-element-title text-xl decoration-teal-500 decoration-4 underline-offset-8 text-gray-800 underline">{item.heading}</h3>
                    <p className="text-gray-600" >{item.description}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
         
         <VerticalTimelineElement
                iconStyle={{ background: "#07d2c4c1", color: "#fff" }}
                icon={<BsStars />}
              />
            </VerticalTimeline>
      </div>
      </div>
    </div>
  );
};

export default RecruitProcess;
