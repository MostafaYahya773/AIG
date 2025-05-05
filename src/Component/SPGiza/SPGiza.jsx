import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/heroImg.jpg';
import DivAnimation from '../devAnimation/devAnimation';
import useRequist from '../../hooks/useRequest';

export default function SPGiza() {
  let { data } = useRequist('projects');

  let newData = data?.filter(
    (ele) =>
      ele.address.government === 'الجيزة' || ele.address.government === 'Giza'
  );

  useEffect(() => {}, []);
  return (
    <div className="w-full">
      <div className="imgSlider overflow-hidden grid grid-col-1 gap-y-3 sm:gap-x-3 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2  md:gap-4  lg:gap-7 ">
        {newData?.map((area) => (
          <DivAnimation>
            <div key={area?.id} className="overflow-hidden h-full">
              <Link
                to={`/ProjectDetails/${area?.id}`}
                className="rounded-3xl relative "
              >
                <img
                  className="w-full rounded-2xl h-full hover:scale-[1.2] transition-all duration-300"
                  src={area?.media[0]}
                />
                <div className="title absolute  w-2/4 bottom-2 end-2 text-center">
                  <div className="bg-[#f7f4d6e0] lg:px-5 md:px-2 py-1 rounded-2xl text-[15px] font-medium">
                    {area.address.government}
                  </div>
                </div>
              </Link>
            </div>
          </DivAnimation>
        ))}
      </div>
    </div>
  );
}
