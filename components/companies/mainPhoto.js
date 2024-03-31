import React from "react";
import Marquee from "react-fast-marquee";

const array = [
  {
    link: "",
    image:
      "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/Asset-35-1.png",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DBwtit4CLrgIRHI6fM45Em87kHjtQ14zPWFS-XCvS4Ztnc-iWxqiFuZ8vzNw2Ej3n7Y&usqp=CAU",
  },
  {
    link: "",
    image:
      "https://www.datamation.com/wp-content/uploads/2022/04/SAP-logo-icon.png",
  },
];

const MainPhoto = () => {
  return (
    <div>
      <div className="relative">
        <picture>
          <img
            src="https://www.buzzybrains.com/images/Software-Development-banner.jpg"
            alt=""
            className="w-full h-[580px]"
          />
        </picture>
        <div>
          <div className="absolute top-24 left-[50%] -translate-x-[50%] bg-gray-900/40 px-8 py-4 text-white font-bold text-6xl rounded-xl ">
            Recruiting Companies
          </div>
         
          <div  className="py-2" >
          <Marquee gradient={true} >
            {array.map((item)=>{
                return (
                    <picture>
                        <img src={item.image} alt="" className="w-28 bg-transparent p" />
                    </picture>
                )
            })}
          </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
