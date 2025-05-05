import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../../assets/images/opinion.jpg';
import { Link } from 'react-router-dom';
import { CallContext } from '../../Context/Context';

export default function CallOurTeam() {
  let { language } = useContext(CallContext);

  return (
    <div
      className="hero max-w-[1900px] mx-auto relative md:py-20 py-10 z-10  bg-center bg-cover overflow-y-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <span className="opinion-befour z-0"></span>
      <div className="max-w-[1300px] mx-auto px-3 z-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:mt-10 mt-0 mx-auto ">
          <div className="flex flex-col order-2 lg:order-1 gap-y-9">
            <div className="form bg-[#ffffff] w-full py-10 px-5 flex flex-col gap-y-5 ">
              <h1 className="text-[#063772] text-[40px] font-bold text-center ">
                {language === 'ar' ? 'أستشر فريقنا' : 'Consult our team'}
              </h1>
              <form>
                <div className="flex flex-col gap-7">
                  <input
                    placeholder="Email"
                    className="bg-[#D0D0D0]"
                    type="text"
                  />
                  <textarea
                    placeholder="Enter your question here"
                    className="bg-[#D0D0D0] h-[300px]"
                  ></textarea>
                  <button></button>
                </div>
              </form>
              <button className="bg-[#063772] w-1/2 mx-auto py-3 text-[#ffffff] text-[18px] cursor-pointer">
                {language === 'ar' ? 'أرسل' : 'send'}
              </button>
            </div>
            <div className="lg:hidden flex socail gap-x-10 px-6 items-center justify-center text-[#ffffff]">
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <i className="fa-brands fa-tiktok"></i>
              </Link>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="title flex flex-col justify-between order-1 lg:order-2">
            <h1 className="text-[30px] font-bold text-[#ffffff] text-center lg:text-start">
              {language === 'ar'
                ? 'هل تحتاج للمساعدة؟ تواصل معنا ونحن جاهزون لمساعدتك'
                : 'Need help? Contact us and we are ready to help'}
            </h1>
            <div className="hidden lg:flex flex-col gap-y-3 items-end text-[#ffffff] text-[18px]">
              <h1 className="font-bold text-[18px]">contact</h1>
              <div className="mobile flex gap-3 items-center ">
                <a href="tel:00112233445">00112233445</a>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="gmail flex gap-3 items-center">
                <a href="mailto:arabicetali@gmail.com">arabicetali@gmail.com</a>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="location flex gap-3 items-center">
                <span>Minia-Egypt</span>
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </div>
            <div className="hidden lg:flex socail  flex-col gap-y-3 items-end text-[#ffffff]">
              <h1 className="font-bold text-[18px]">Social Media</h1>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <p className="font-light">Aig</p>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <p className="font-light">Aig @</p>
                <i className="fa-brands fa-tiktok"></i>
              </Link>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <p className="font-light">Aig @</p>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link className="flex gap-x-2 items-center text-[20px]" to={'#'}>
                <p className="font-light">Aig @</p>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
