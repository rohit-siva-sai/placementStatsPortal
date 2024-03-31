import React, { useEffect } from "react";
import AOS from 'aos';

import 'aos/dist/aos.css'; 

const MainPhoto = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
      <div className="relative ">
        <picture>
          <img
            src="./hero-slider-2.jpg"
            className="opacity-90 md:h-auto h-56 "
            alt=""
          />
        </picture>
        <div className="absolute top-0 right-1  md:block hidden"  data-aos="fade-down" data-aos-duration="8000"  >
          <div className="w-2 h-20 absolute top-0 right-[650px] bg-orange-500 " data-aos="fade-down" data-aos-duration="4000" >
            <picture>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aJHeCZnGNSGXzgIb8rueqjiV6rRR2aT2BUv1HhVrdlfA7gIS0vw-Wfg1JsaCFNUwt34&usqp=CAU"
                alt=""
                className="w-2 h-20"
              />
            </picture>
          </div>
          <div className="bg-gray-900/20 rounded-xl text-white absolute right-[450px] top-16 font-semibold w-[400px] h-fit p-8 swing  " data-aos="fade-up" data-aos-duration="4000"  >
            <div className="relative ">
              <div className="absolute -top-6 left-[148px] shadow-md shadow-gray-500 w-8 h-8 rounded-full bg-stone-600">
                <picture>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/018/062/513/small/wooden-badge-banner-wooden-plank-plate-png.png"
                    alt=""
                  />
                </picture>
              </div>
              <p className="text-xl text-yellow-400 font-serif pt-4 pb-4 font-extrabold  ">
                Conquer your Future
              </p>
              <p>
                Welcome to Raghu College&#39;s track record of placements.
                Immerse yourself in a world of cutting edge IT companies that
                are eager to handpick the best of the bunch.
              </p>
            </div>
          </div>
        </div>
      
        {/* <div className="w-2 h-20 absolute top-0 left-[387px] bg-orange-500 ">
          <picture>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aJHeCZnGNSGXzgIb8rueqjiV6rRR2aT2BUv1HhVrdlfA7gIS0vw-Wfg1JsaCFNUwt34&usqp=CAU"
              alt=""
              className="w-2 h-20"
            />
          </picture>
        </div> */}
        {/* <div className="bg-gray-900/20 rounded-xl text-white absolute swing left-[200px] top-16 font-semibold w-[400px] h-fit p-8   ">
          <div className="relative ">
            <div className="absolute   -top-6 left-[148px] shadow-md shadow-gray-500 w-8 h-8 rounded-full bg-stone-600">
              <picture>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/062/513/small/wooden-badge-banner-wooden-plank-plate-png.png"
                  alt=""
                />
              </picture>
            </div>
            <p className="text-xl text-yellow-400 font-serif pt-4 pb-4 font-extrabold  ">
              Conquer your Future
            </p>
            <p>
              Welcome to Raghu College&#39;s track record of placements. Immerse
              yourself in a world of cutting edge IT companies that are eager to
              handpick the best of the bunch.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainPhoto;
