import React, { useCallback, useContext } from 'react';
import { useEffect } from 'react';
import about from '../../assets/images/aboutus.png';
import history from '../../assets/images/ourhistory.png';
import CallOurTeam from '../CallOurTeam/CallOurTeam';
import useRequist from '../../hooks/useRequest';
import icons from '../../assets/images/about.png';
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let language = localStorage.getItem('lang');

  let { data } = useRequist('company');

  return (
    <div className="min-h-[40px] ">
      <div className="bg-gradient-to-r from-[#063772] to-[#738EB1]">
        <div className="max-w-[1300px] mx-auto">
          <div className="hero  min-h-[400px] mt-15 flex  sm:flex-row flex-col justify-around items-center">
            <div className="flex flex-col gap-y-7">
              <h1 className="lg:text-[96px] md:text-[70px] text-[60px] text-[#ffffff]">
                {language === 'ar' ? 'من نحن' : 'About Us'}
              </h1>
            </div>
            <div>
              <img src={about} className="md:w-full w-2/3 mx-auto" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="ourhistory my-3 w-full pe-10 max-w-[1300px] mx-auto">
        <img src={history} className="mx-auto  md:w-auto" alt="historic img" />
      </div>
      <div className="discover bg-[#063772] ">
        <div className="content max-w-[1300px] mx-auto py-10 grid grid-cols-1 gap-y-5 lg:grid-cols-2">
          <div className="w-full px-3">
            <h1 className=" md:text-[48px] text-[30px] text-[#FFFFFF] font-medium lg:text-center">
              {data?.name}
            </h1>
          </div>
          <div className="w-full px-3">
            <p className="text-[#FFFFFF] md:text-[20px] sm:text-[18px] text-[16px]">
              {data?.about}
            </p>
          </div>
        </div>
      </div>
      <div className="content grid md:grid-cols-2 max-w-[1300px] mx-auto">
        <div className="ourMessages md:border-e-2 md:border-black flex flex-col lg:px-15 px-5 md:gap-y-20 sm:gap-y-10 gap-y-5 md:py-20 py-7">
          <div className="icon flex items-center md:justify-center font-medium gap-x-10 ">
            <i
              className={`${data?.vision?.ourMessage.icon} text-[#063772] rotate-90 text-[70px]`}
            ></i>
            <h2 className="text-[40px]">{data?.vision?.ourMessage.title}</h2>
          </div>
          <div className="message md:text-[25px] text-[18px] font-medium  ">
            <h1 className="leading-relaxed">
              {data?.vision?.ourMessage.description}
            </h1>
          </div>
        </div>
        <div className="ourMessages flex flex-col lg:px-15 px-5 md:gap-y-20 sm:gap-y-10 gap-y-5  md:py-20 py-7 ">
          <div className="icon flex items-center md:justify-center  font-medium gap-x-10 ">
            <i
              className={`${data?.vision?.ourValues.icon} text-[#063772] text-[70px]`}
            ></i>
            <h2 className="text-[40px]">{data?.vision?.ourValues.title}</h2>
          </div>
          <div className="message md:text-[25px] text-[18px] font-medium flex flex-col gap-y-10 ">
            <h1 className="">{data?.vision?.ourValues.description}</h1>
          </div>
        </div>
      </div>
      <div className="whyDeferent max-w-[1900px] bg-[#063772]">
        <div className=" max-w-[1300px] mx-auto grid grid-cols-1 md:gap-x-10 gap-y-10 lg:gap-x-20 md:grid-cols-2 py-32 text-[#FFFFFF]">
          <div className="icon flex flex-col gap-x-5 items-end md:order-1 order-2">
            {data?.whyWeAreDifferent?.features.map((ele) => (
              <div key={ele.id} className="grid grid-cols-[auto_1fr] gap-x-5">
                <div className="title flex flex-col justify-center px-2 text-end">
                  <h1 className="text-[clamp(18px,2vw,22px)] font-bold">
                    {ele.title}
                  </h1>
                  <p className="text-[clamp(14px,2vw,16px)] font-light">
                    {ele.description}
                  </p>
                </div>
                <div className="w-[100px]">
                  <img className="w-full h-auto" src={ele.icon} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-3 md:order-2 order-1 px-5">
            <div className="flex justify-end md:pe-10">
              <img className="w-1/5" src={icons} alt="" />
            </div>
            <h1 className="text-[clamp(25px,5vw,70px)]">
              {language === 'ar' ? 'عنا' : 'About'}
            </h1>
            <p className="text-[clamp(18px,5vw,20px)]">
              {data?.whyWeAreDifferent?.paragraph}
            </p>
          </div>
        </div>
      </div>
      <CallOurTeam />
    </div>
  );
}
