import React from "react";
import FaqCard from "./faqCard";
import Link from "next/link";

const array = [
  {
    question: "How can I register for campus placements?",
    answer:
      "To register for campus placements, students need to log in to the college's placement portal and complete the registration process. Detailed instructions and deadlines are typically communicated through college announcements and emails from the placement cell.",
  },
  {
    question: "What documents are required for placement registration?",
    answer:
      "Students are usually required to provide documents such as their resume, academic transcripts, identification proof, and passport-sized photographs during the placement registration process. Additional documents may be requested by the placement cell as needed.",
  },
  {
    question: "How can I prepare for campus placements?",
    answer:
      "Students can prepare for campus placements by attending placement training sessions, participating in mock interviews, improving their communication skills, and researching companies and job roles of interest. The placement cell also provides resources and guidance to help students prepare effectively.",
  },
  {
    question: "What types of companies visit the campus for placements?",
    answer:
      "A diverse range of companies from various industries visit the campus for placements, including IT companies, core engineering firms, consulting firms, manufacturing companies, and more. The placement cell invites companies based on students' interests and market demand.",
  },
  {
    question: "How does the placement process work?",
    answer:
      "The placement process typically involves several stages, including registration, resume submission, online assessments, interviews, and job offers. The placement cell coordinates with companies to schedule recruitment drives and facilitates the entire process from start to finish.",
  },
  {
    question: "Can I apply for placements if I have backlogs?",
    answer:
      "The eligibility criteria for campus placements may vary depending on the company and the specific job role. While some companies may have restrictions on the number of backlogs allowed, others may consider candidates on a case-by-case basis. It's advisable to check the eligibility criteria specified by each company before applying.",
  },
  {
    question: "What support does the placement cell provide to students?",
    answer:
      "The placement cell provides various forms of support to students, including career counseling, resume building assistance, interview preparation sessions, industry connections, internship opportunities, and job placement assistance. The placement cell strives to help students achieve their career goals and secure rewarding employment opportunities.",
  },
  {
    question:
      "How does Raghu Engineering College foster diversity in its placement process?",
    answer:
      "Raghu Engineering College promotes diversity by encouraging companies to recruit candidates based on skills and potential, regardless of background.",
  },
  {
    question:
      "What steps does Raghu Engineering College take to stay updated with industry demands?",
    answer:
      "Raghu Engineering College regularly updates its curriculum and collaborates with industry partners to meet evolving industry needs.",
  },
  {
    question:
      "How does Raghu Engineering College support student entrepreneurship?",
    answer:
      "Raghu Engineering College offers incubation facilities and startup mentorship programs to support student-led startups and foster innovation.",
  },
  {
    question: "Can students pursue external internships and research projects?",
    answer:
      "Yes, Raghu Engineering College encourages students to pursue internships and research projects outside campus for diverse experiences.",
  },
  {
    question:
      "What non-technical skills does Raghu Engineering College focus on?",
    answer:
      "In addition to technical skills, Raghu Engineering College emphasizes soft skills such as communication and leadership to enhance employability.",
  },
];

const Faq = () => {
  return (
    <div className="md:mx-40 mx-4 my-12 md:my-16">
      <p className="text-3xl font-bold pb-8 text-gray-800">FAQs</p>
      <div className="flex flex-col space-y-4">
        {array.map((item) => {
          return <FaqCard main={item.question} text={item.answer} />;
        })}
      </div>
      {/* <div className="flex flex-col bg-gray-100 w-3/4 mx-auto py-12 mt-12 space-y-6 items-center">
        <p className="font-bold text-gray-800 text-2xl">Have questions?</p>
        <Link href={""}>
          <div className="bg-blue-400 text-white text-lg px-10 w-fit py-2 font-semibold  hover:opacity-90 cursor-pointer rounded-sm">
            Contact Us
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Faq;
