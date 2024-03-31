import React from 'react'
import { BsStars } from 'react-icons/bs';
// import { PiSealCheckBold size={50} } from 'react-icons/fa';
import { PiSealCheckBold  } from "react-icons/pi";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
const array = [
    {
        heading: "Career Guidance",
        matter: "The placement cell provides career guidance and counseling to students, helping them make informed decisions about their career paths and job search strategies."
    },
    {
        heading: "Industry Connections",
        matter: "The placement cell establishes and maintains strong relationships with industry partners, facilitating internship opportunities, campus recruitment drives, and industry collaborations."
    },
    {
        heading: "Skill Development",
        matter: "Through workshops, seminars, and training programs, the placement cell helps students develop essential employability skills such as communication, teamwork, problem-solving, and leadership."
    },
    {
        heading: "Resume Building",
        matter: "The placement cell assists students in creating professional resumes and LinkedIn profiles that effectively showcase their skills, experiences, and achievements to potential employers."
    },
    {
        heading: "Mock Interviews",
        matter: "The placement cell conducts mock interview sessions to prepare students for the rigors of job interviews. Feedback from mock interviews helps students identify areas for improvement and gain confidence."
    },
    {
        heading: "Placement Support",
        matter: "The placement cell actively assists students in securing internships, summer training opportunities, and full-time job placements by connecting them with relevant companies and facilitating the application process."
    },
    {
        heading: "Alumni Network",
        matter: "The placement cell leverages the college's alumni network to provide mentorship, networking opportunities, and industry insights to current students, enhancing their career prospects."
    },
    {
        heading: "Placement Statistics",
        matter: "The placement cell maintains and shares placement statistics, showcasing the success of Raghu Engineering College's graduates in securing employment with reputable companies across various industries."
    },
    {
        heading: "Career Events",
        matter: "The placement cell organizes career fairs, employer talks, and recruitment drives on campus, providing students with direct access to potential employers and exposure to diverse career opportunities."
    },
    {
        heading: "Continuous Support",
        matter: "Even after graduation, the placement cell continues to provide support and guidance to alumni, helping them navigate career transitions, explore further education options, and advance in their chosen fields."
    },
]

const Benifits = () => {
  return (
    <div>
        <p className="recruit font-semibold text-blue-500  hover:scale-105 transition-all duration-300 hover:underline text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">Several Benifits of Placement Cell</p>
        <div className="mt-16">
      <VerticalTimeline lineColor="#60a5fa" >
          {array.map((item, index) => {
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
                // date={`BENIFIT ${index + 1}`}
                contentArrowStyle={{
                  borderRight: "7px solid #60a5fa ",
                }}
                iconStyle={{
                  background: "#60a5fa",
                  color: "#fff",
                  
                }}
                icon={<PiSealCheckBold  />}
               
              >
                <div className=" ">
                    <h3 className="font-semibold vertical-timeline-element-title text-xl decoration-teal-500 decoration-4 underline-offset-8 text-gray-800 underline">{item.heading}</h3>
                    <p className="text-gray-600" >{item.matter}</p>
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
  )
}

export default Benifits
