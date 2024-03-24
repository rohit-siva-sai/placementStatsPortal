import Link from "next/link";
import React from "react";
const array = [
    {
        link: "",
        image: "",
      },
      {
        link: "",
        image: "",
      },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-35-1.png",
  },
  
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-34-1.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-42.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-36.png",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-49.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/MicrosoftTeams-image-34.jpg",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-48-1.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-57.jpg",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/MicrosoftTeams-image-33.jpg",
  },
 
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-56.jpg",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-43-1.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-40-1.png",
  },
  
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-37.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-44.png",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-39-1.png",
  },
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-47-1.png",
  },
  {
    link: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DBwtit4CLrgIRHI6fM45Em87kHjtQ14zPWFS-XCvS4Ztnc-iWxqiFuZ8vzNw2Ej3n7Y&usqp=CAU",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image: "",
  },
  {
    link: "",
    image: "https://www.datamation.com/wp-content/uploads/2022/04/SAP-logo-icon.png",
  },
];

const Companies = () => {
  return (
    <div className="my-12 mx-16">
      <div>
        <p className="font-semibold text-blue-500 hover:scale-105 transition-all duration-300 hover:underline text-4xl cursor-pointer underline-offset-8 decoration-slate-500 text-center  recruit">
          Recruiting Companies
        </p>
        <div className="grid grid-cols-5 place-items-center gap-y-6 mt-14 ">
          {array.map((item) => {
            return (
             <div>
                {item.image.length>0 && <Link href={""}>
                <picture>
                  <img
                    src={item.image}
                    alt=""
                    className=" bg-white rounded-xl w-48 h-full  shadow-md shadow-blue-200 hover:scale-110 transition-all duration-500"
                  />
                </picture>
              </Link>}
             </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
