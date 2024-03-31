import React from "react";
import ProfileCard from "./profileCard";
const array = [
  {
    name: "Pavan Chaitanya",
    comapany: "",
    companyLogo: "http://www.w3.org/2000/svg",
    photo:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Pavan-Chaitanya.png",
    role: "Senior System Architect",
  },
  {
    name: "",
    comapany: "",
    companyLogo: "",
    photo: "",
    role: "",
  },
  {
    name: "",
    comapany: "",
    companyLogo: "",
    photo: "",
    role: "",
  },
  {
    name: "",
    comapany: "",
    companyLogo: "",
    photo: "",
    role: "",
  },
  {
    name: "",
    comapany: "",
    companyLogo: "",
    photo: "",
    role: "",
  },
  {
    name: "",
    comapany: "",
    companyLogo: "",
    photo: "",
    role: "",
  },
];

const AluminiWork = () => {
  return (
    <div className="my-12 md:mx-16 mx-4 md:belock hiddeen ">
      <p className="recruit font-semibold text-blue-500 hover:scale-105 transition-all duration-300 hover:underline text-3xl  md:text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center">
        Alumni Profile
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-8 md:hidden " >
      <ProfileCard
              companyImage={
                "https://download.logo.wine/logo/Pegasystems/Pegasystems-Logo.wine.png"
              }
              direction="ml-auto"
              role={"Senior System Architect"}
              name={"Pavan Chaitanya"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Pavan-Chaitanya.png"
              }
            />
             <ProfileCard
              companyImage={
                "https://pngimg.com/uploads/amazon/amazon_PNG13.png"
              }
              role={"SD Engineer"}
              name={"Megha Shyam"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Megha-Shyam.png"
              }
            />
            <ProfileCard
              role={"System Analyst"}
              name={"Bharghavi"}
              companyImage={
                "https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png"
              }
              direction={"ml-auto"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Bharghavi.png"
              }
            />
             <ProfileCard
              companyImage={
                "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/upskilling/CISCO_Logo.png"
              }
              direction="mr-auto"
              role={"Software Engineer"}
              name={"Chandralekha"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Chandralekha.png"
              }
            />
             <ProfileCard
              companyImage={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
              }
              direction="ml-auto"
              role={"Assistant System Engineer"}
              name={"Radha Priya"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Radha-Priya.png"
              }
            />
             <ProfileCard
              companyImage={
                "https://logoeps.com/wp-content/uploads/2014/01/infosys-limited-vector-logo.png"
              }
              direction="mr-auto"
              role={"Digital Specialist Engineer"}
              name={"Udhay Vihar"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Udhay-Vihar.png"
              }
            />
      </div>
      <div className="relative mt-14 w-full h-[700px]  md:block hidden ">
        <div className="absolute  flex space-x-12 left-[50%] -translate-x-[50%] ">
          <div>
            <ProfileCard
              companyImage={
                "https://download.logo.wine/logo/Pegasystems/Pegasystems-Logo.wine.png"
              }
              direction="ml-auto"
              role={"Senior System Architect"}
              name={"Pavan Chaitanya"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Pavan-Chaitanya.png"
              }
            />
          </div>
          <div>
            <ProfileCard
              companyImage={
                "https://pngimg.com/uploads/amazon/amazon_PNG13.png"
              }
              role={"SD Engineer"}
              name={"Megha Shyam"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Megha-Shyam.png"
              }
            />
          </div>
        </div>
        <div className="absolute  flex space-x-[300px] top-[200px] left-[50%] -translate-x-[50%]  ">
          <div>
            <ProfileCard
              role={"System Analyst"}
              name={"Bharghavi"}
              companyImage={
                "https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png"
              }
              direction={"ml-auto"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Bharghavi.png"
              }
            />
          </div>
          <div>
            <ProfileCard
              companyImage={
                "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/upskilling/CISCO_Logo.png"
              }
              direction="mr-auto"
              role={"Software Engineer"}
              name={"Chandralekha"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Chandralekha.png"
              }
            />
          </div>
        </div>
        <div className="absolute  flex space-x-[550px] top-[400px] left-[50%] -translate-x-[50%]  ">
          <div>
            <ProfileCard
              companyImage={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
              }
              direction="ml-auto"
              role={"Assistant System Engineer"}
              name={"Radha Priya"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Radha-Priya.png"
              }
            />
          </div>
          <div>
            <ProfileCard
              companyImage={
                "https://logoeps.com/wp-content/uploads/2014/01/infosys-limited-vector-logo.png"
              }
              direction="mr-auto"
              role={"Digital Specialist Engineer"}
              name={"Udhay Vihar"}
              photo={
                "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Udhay-Vihar.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluminiWork;
