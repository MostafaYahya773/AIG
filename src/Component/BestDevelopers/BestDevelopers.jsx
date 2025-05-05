import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import autom from '../../assets/images/atum.png';
import khaledSabry from '../../assets/images/khaledSabry.png';
import palmHills from '../../assets/images/palmHills.png';
import { CallContext } from '../../Context/Context';
export default function BestDevelopers() {
  let { language } = useContext(CallContext);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <i
        className="fa-solid fa-chevron-right md:text-[30px] text-[25px]  lg:text-[40px] absolute  -right-5  md:-right-6 top-1/2 cursor-pointer text-[#33363F] "
        onClick={onClick}
      ></i>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <i
        className="fa-solid fa-chevron-left z-50 md:text-[30px] text-[25px] lg:text-[40px] absolute  -left-5  md:-left-6 top-1/2 cursor-pointer text-[#33363F]"
        onClick={onClick}
      ></i>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  let [bestDevelopers, useBestDevelopers] = useState([
    { img: autom, id: 1 },
    { img: khaledSabry, id: 2 },
    { img: palmHills, id: 3 },
  ]);

  return (
    <div>
      <div className="relative my-9 lg:my-20 px-5 flex flex-col md:gap-y-20 py-7 max-w-[1300px] mx-auto sm:gap-x-3 ">
        <h1
          className={
            language === 'ar'
              ? `lg:text-[50px] md:text-[40px] text-[30px] font-light areasbefore areasafter`
              : 'lg:text-[50px] md:text-[40px] text-[30px] font-light'
          }
        >
          {language === 'ar' ? 'افضل المطوريين العقاريين' : 'Best Developers'}
        </h1>

        <div className="relative mx-3">
          <Slider {...settings}>
            {bestDevelopers.map((ele) => (
              <div key={ele?.id} className="w-full p-3">
                <img
                  className="w-[75%] rounded-t-2xl mx-auto"
                  src={ele.img}
                  alt="img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
