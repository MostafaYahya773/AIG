import React, { useContext } from 'react';

import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';

export default function Hero() {
  let { language } = useContext(CallContext);
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <i
        className="fa-solid fa-chevron-right md:text-[30px] text-[25px] lg:text-[40px] absolute  right-2  top-1/2 cursor-pointer text-[#ffffff] "
        onClick={onClick}
      ></i>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <i
        className="fa-solid  fa-chevron-left md:text-[30px] z-20 text-[25px] lg:text-[40px] absolute  left-2  top-1/2 cursor-pointer text-[#ffffff] "
        onClick={onClick}
      ></i>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: true,
  };

  let { data } = useRequist('projects');

  return (
    <div className="main-hero max-w-[1900px] mx-auto overflow-hidden ">
      <Slider className="hero-slider" {...settings}>
        {data?.slice(0, 6).map((city) => (
          <div
            key={city?.id}
            className="imgContainer relative  md:h-[100vh] h-[450px] "
          >
            <img className="w-full h-full " src={city?.media[2]} />

            <h1 className="absolute end-0 bottom-25 md:bottom-30 text-shadow text-[#ffffff] mx-4 md:mx-7 text-[30px] md:text-[65px] lg:text-[96px]">
              {city?.title}
            </h1>

            <div className="absolute px-7  text-[#ffffff] bottom-15 end-0 md:mx-5 lg:mx-7 location flex items-center gap-x-4">
              <h2 className="lg:text-[50px] md:text-[30px] text-[20px] text-shadow">
                {city?.address.area}
              </h2>
              <i className="fa-solid fa-location-dot lg:text-4xl text-shadow"></i>
            </div>

            <Link
              className="absolute start-0 bottom-10 mx-4 md:mx-10 bg-[#063772] px-5 py-2 md:px-12 md:py-2 rounded-4xl text-2xl md:text-3xl text-white opacity-70 hover:opacity-100 transition-all duration-200"
              to={`/ProjectDetails/${city?.id}`}
            >
              {language === 'ar' ? 'المزيد' : 'more'}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
