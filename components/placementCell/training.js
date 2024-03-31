import React from "react";
import { BsStars } from "react-icons/bs";
import { FaHandPointRight, FaUserGraduate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Training = () => {
  return (
    <div className="my-16 mx-16">
    <div className="flex flex-col space-y-2">
        <p className="recruit font-semibold text-blue-500  hover:scale-105 transition-all duration-300 hover:underline text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">Training Timeline</p>
        <p className="font-semibold text-gray-400 text-center text-lg">(Separate Training for Product batch & Service batch Students)</p>
    </div>
      <div className="mt-16">
      <VerticalTimeline lineColor="#60a5fa">
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          contentStyle={{
            //   background: "#9bda92",
            //   color: "#fff",
            border: "3px solid #60a5fa",
            boxShadow: "2px 2px 10px 1px #60a5fa",
            borderRadius: "10px",
          }}
          date={`1st YEAR`}
          contentArrowStyle={{
            borderRight: "7px solid #60a5fa ",
          }}
          iconStyle={{
            background: "#60a5fa",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Problem Solving using C Pogramming
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Apptitude & Technical skills (Basic 'C' & Basic data structure)
              </h3>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          contentStyle={{
            //   background: "#9bda92",
            //   color: "#fff",
            border: "3px solid #60a5fa",
            boxShadow: "2px 2px 10px 1px #60a5fa",
            borderRadius: "10px",
          }}
          date={`2nd YEAR`}
          contentArrowStyle={{
            borderRight: "7px solid #60a5fa ",
          }}
          iconStyle={{
            background: "#60a5fa",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">Python</h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Data structure
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">SQL</h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Apptitude & Technical skills (Advanced 'C' & Advanced data
                structure)
              </h3>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          contentStyle={{
            //   background: "#9bda92",
            //   color: "#fff",
            border: "3px solid #60a5fa",
            boxShadow: "2px 2px 10px 1px #60a5fa",
            borderRadius: "10px",
          }}
          date={`3rd YEAR`}
          contentArrowStyle={{
            borderRight: "7px solid #60a5fa ",
          }}
          iconStyle={{
            background: "#60a5fa",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Java Full stack
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">AWS</h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">Pega</h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Java Script Full stack
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">Apptitude Competency Development Program</h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
                Technical Coding Training
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
              Company Specific Training
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
              Problem Solving using Algorithemic Thinking
              </h3>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          contentStyle={{
            //   background: "#9bda92",
            //   color: "#fff",
            border: "3px solid #60a5fa",
            boxShadow: "2px 2px 10px 1px #60a5fa",
            borderRadius: "10px",
          }}
          date={`4th YEAR`}
          contentArrowStyle={{
            borderRight: "7px solid #60a5fa ",
          }}
          iconStyle={{
            background: "#60a5fa",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <FaHandPointRight className=" text-orange-400" size={30} />
              <h3 className="font-semibold text-gray-700 text-lg">
              Project / Internship
              </h3>
            </div>
            
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
                iconStyle={{ background: "#07d2c4c1", color: "#fff" }}
                icon={<BsStars />}
              />
      </VerticalTimeline>
      </div>
    </div>
  );
};

export default Training;
