import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';
useContext;

export default function Footer() {
  let { data } = useRequist('company');
  let { language } = useContext(CallContext);
  return (
    <div className="bg-[#063772] max-w-[1900px] mx-auto">
      <div className="grid grid-rows-[auto_auto_auto_auto] gap-15 md:gap-10 px-5 py-3 max-w-[1300px] mx-auto">
        <div className="logo text-[#FFFFFF]">
          <img
            className="lg:w-[140px] md:w-[120px] w-[120px]"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="title  lg:text-[40px] md:text-[35px] sm:text-[25] text-[15px] text-[#FFFCFC] font-medium ">
          {data?.about}
        </div>
        <div className="contact flex flex-col gap-7 text-[#ffffff]">
          <h1 className="md:text-[64px] text-[30px] relative  text-[#FFFFFF]">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <div className="flex w-full justify-between flex-col md:flex-row gap-y-7 ">
            <div className="flex flex-col gap-y-3">
              <div className="mobile flex gap-3 items-center">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:00112233445">00112233445</a>
              </div>
              <div className="gmail flex gap-3 items-center">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:arabicetali@gmail.com">arabicetali@gmail.com</a>
              </div>
              <div className="location flex gap-3 items-center">
                <i className="fa-solid fa-location-dot"></i>
                <span>Minia-Egypt</span>
              </div>
            </div>
            <div className="news flex flex-col gap-y-3">
              <h1 className="text-[24px] font-medium text-[#FFFFFF]">
                {language === 'ar'
                  ? 'جريدتنا الالكترونية'
                  : 'Our electronic newspaper'}
              </h1>
              <p className="text-[21px] font-medium text-[#FFFFFF]">
                {language === 'ar'
                  ? 'أحصل على آخر المواضيع والأخبار في بريدك'
                  : 'Get the latest topics and news in your inbox'}
              </p>
              <form className="email w-full relative">
                <input
                  className="w-full rounded-3xl text-black"
                  placeholder={
                    language === 'ar' ? 'بريدك الألكتروني' : 'Enter Your Email'
                  }
                  type="email"
                />
                <button
                  type="submit"
                  className="bg-[#063772] outline-none hover:bg-[#06377273] text-[#ffffff] text-[22px] font-medium absolute left-1 cursor-pointer rounded-3xl top-[3.7px] px-4 py-[1.5px]"
                >
                  {language === 'ar' ? 'أشترك' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="socail flex flex-col mt-10 gap-7 text-[#ffffff]">
          <div className="medai flex justify-center items-center gap-7 text-[22px] border-t-2 pt-15 border-white">
            <Link to={'#'}>
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to={'#'}>
              <i className="fa-brands fa-tiktok"></i>
            </Link>
            <Link to={'#'}>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={'#'}>
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </div>
          <h1 className="text-center ">
            copy @ 2025 جميع الحقوق محفوظة | المجموعة العربية الإيطالة
          </h1>
        </div>
      </div>
    </div>
  );
}
