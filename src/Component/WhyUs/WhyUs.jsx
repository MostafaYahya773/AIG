import React, { useContext } from 'react';
import { useEffect } from 'react';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';
export default function WhyUs() {
  let { language } = useContext(CallContext);
  let { data } = useRequist('company');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-10 mb-10  ">
      <div className="title">
        <h1 className="text-[48px] text-center font-medium text-shadow-us">
          {language === 'ar' ? 'لماذا تختارنا' : 'Why Us'}
        </h1>
      </div>
      <div className="box-shadow grid lg:grid-cols-4 sm:grid-cols-2 gap-y-20 sm:gap-y-10 max-w-[1300px] bg-[#FFFBD7] mx-auto px-5  py-7 rounded-4xl ">
        {data?.whyChooseUs?.map((ele, index) => (
          <div
            key={index}
            className="flex flex-col text-center px-7 gap-y-5 lg:border-e-2 lg:border-[#063772] last:border-l-0 md:border-e-none"
          >
            <div className="w-1/2 mx-auto">
              <i className={`${ele.icon}  text-[50px]  text-[#063772]`}></i>
            </div>
            <h1 className="text-[#0B3B75BF]  text-[24px] lg:text-[16px] border-b-2 pb-4 font-bold">
              {ele.title}
            </h1>
            <p className="text-[#063772BA]">{ele.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
