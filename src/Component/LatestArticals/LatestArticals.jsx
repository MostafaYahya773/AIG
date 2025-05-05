import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import style from './LatestArticals.module.css';
import img from '../../assets/images/heroImg.jpg';
import { Link } from 'react-router-dom';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';

export default function LatestArticals() {
  let { data } = useRequist('blog');
  let { language } = useContext(CallContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative h-full my-9 px-5 flex flex-col md:gap-y-20 py-7 max-w-[1300px] mx-auto sm:gap-x-3 ">
      <h1
        className={
          language === 'ar'
            ? `lg:text-[50px] md:text-[40px] text-[30px] font-light areasbefore areasafter`
            : 'lg:text-[50px] md:text-[40px] text-[30px] font-light'
        }
      >
        {language === 'ar' ? 'المناطق المميزة' : 'Featured areas'}
      </h1>
      <Slider {...settings}>
        {data?.map((artical) => (
          <Link
            key={artical?.id}
            to={`/articaldetalis/${artical?.id}`}
            className="w-full h-full px-5 relative "
          >
            <span
              className={'absolute bg-[#063772] px-3 text-[18px] text-white'}
            >
              NEW
            </span>
            <img
              className="w-full rounded-md h-full"
              src={artical?.media[0]}
              alt="img"
            />
            <h1 className="sm:text-[19px] px-1 text-end text-[17px] pt-2 lg:text-[18px]">
              {artical?.title}
            </h1>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
