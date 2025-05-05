import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import style from './SpecailAreasDetails.module.css';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';
useContext;

export default function SpecailAreasDetails() {
  let [activeLink, useActiveLink] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { language } = useContext(CallContext);

  let { name } = useParams();
  let { data } = useRequist('projects');
  let newData = data?.filter((ele) => ele.address.government === name);

  return (
    <div className="w-full">
      <div className="w-full">
        <div
          className="hero max-w-[1900px] mx-auto relative md:h-[500px] h-[300px] bg-center bg-cover "
          style={{ backgroundImage: `url(${newData?.[0].media?.[1]})` }}
        >
          <h1 className="lg:text-[90px] w-full text-center md:text-[80px] text-[30px] text-shadow font-medium text-[#FFFFFF] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {newData?.[0].address?.government}
          </h1>
        </div>
        <div className=" max-w-[1300px] mx-auto ">
          <div className="linksearch flex flex-col overflow-hidden gap-y-4 min-h-[150px] py-5 max-w-[1300px] mx-auto text-[20px] font-medium">
            <div className="search relative px-2">
              <input
                placeholder="أبحث هنا"
                type="text"
                className="w-full py-4 box-shadow  outline-none rounded-md"
              />
              <button className="bg-[#063772] text-[#FFFFFF] md:px-20 px-10 py-2  left-4 mt-[7px] rounded-md absolute cursor-pointer">
                بحث
              </button>
            </div>
            <div className="boxes grid lg:grid-cols-3 sm:grid-cols-2 gap-1 md:gap-3 px-2">
              {newData?.map((ele) => (
                <div
                  key={ele.id}
                  className="flex flex-col  border-2 border-[#00000030] rounded-2xl  "
                >
                  <div className="images w-full  relative ">
                    <img
                      className="h-[250px] w-full rounded-t-2xl "
                      src={ele.media[0]}
                      alt="box-img"
                    />
                    <span className="bg-[#FF382B] text-[16px] rounded-sm text-[#FFFFFF] absolute top-4 right-16 p-1 z-40">
                      For Sale
                    </span>
                    <span className="bg-[#FF9E2D] text-[16px] rounded-sm text-[#FFFFFF] absolute top-4 right-2 px-2 py-1 z-40">
                      open
                    </span>
                  </div>
                  <div className="locationPrise p-3 flex flex-col gap-y-3 ">
                    <p className="text-[20px]">{ele.address.government}</p>
                    <div className="flex gap-x-2 items-center font-mediums">
                      <i class="fa-solid fa-location-dot text-[#063772]"></i>
                      <p className="text-[16px]">{ele.address.area}</p>
                    </div>
                    <div className="price border-b-2 border-[#00000030] pb-4 font-bold">
                      <p>
                        {'50000'} ج.م - {'70000'} ج.م
                      </p>
                    </div>
                  </div>
                  <div className="options grid grid-cols-2 p-3 gap-y-3">
                    <div className="size flex gap-2 items-center">
                      <i class="fa-solid fa-expand"></i>
                      <p className="text-[16px] text-[#00000099] font-medium">
                        {ele.overview.size}
                      </p>
                    </div>
                    <div className="size flex gap-2 items-center">
                      <i class="fa-solid fa-bed"></i>
                      <p className="text-[16px] text-[#00000099] font-medium">
                        {ele.overview.numberOfRooms}
                      </p>
                    </div>
                    <div className="size flex gap-2 items-center">
                      <i class="fa-solid fa-car-side"></i>
                      <p className="text-[16px] text-[#00000099] font-medium">
                        {ele.overview.numberOfGarages}
                      </p>
                    </div>
                    <div className="size flex gap-2 items-center">
                      <i class="fa-solid fa-bath"></i>
                      <p className="text-[16px] text-[#00000099] font-medium">
                        {ele.overview.numberOfBathrooms}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/ProjectDetails/${ele?.id}`}
                    className={`${style.animation} text-center w-1/2 py-2 my-2 mx-2 text-[#FFFDF8] rounded-md cursor-pointer`}
                  >
                    {language === 'ar' ? 'أحجز الأن' : 'Book Now'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
