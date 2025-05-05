import React, { useContext } from 'react';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';
import DivAnimation from '../devAnimation/devAnimation';
import icon from '../../assets/images/Manageicon.png';
export default function CompanyServices() {
  let { data } = useRequist('services');

  let language = localStorage.getItem('lang');
  return (
    <div className="max-w-[1300px] mx-auto my-10 pb-9 font-arabic">
      <div className="w-full flex flex-col gap-y-10 md:gap-y-30 text-center md:text-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 py-3 gap-y-3 lg:gap-x-25 md:gap-x-15">
          <h1 className="lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-medium ">
            {language === 'ar'
              ? 'خدمات عقارية حديث لا مثيل لها'
              : 'Unparalleled modern real estate services'}
          </h1>
          <p className="lg:text-[26px] md:text-[22px] sm:text-[18px]  text-[#00000087]  md:ms-auto ">
            {language === 'ar'
              ? 'فريقنا يقدم خدمات عقارية شاملة تجعلكم تستغنون عن أي وكالة أخرى'
              : 'Our team provides comprehensive real estate services that will make you dispense with any other agency'}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-10 ">
          {data?.map((ele) => (
            <DivAnimation key={ele.id} delay={0}>
              <div className="flex flex-col gap-y-7 p-4 items-center sm:items-start">
                <div className="icon bg-[#95B5CC4A]  px-4 py-2 rounded-2xl ">
                  <i className={`${ele?.icon}  text-[50px] text-[#063772]`}></i>
                </div>
                <h2 className="title text-[28px] font-medium">{ele.title}</h2>
                <p className="description text-[23px] text-[#00000087] ">
                  {ele.description}
                </p>
              </div>
            </DivAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
