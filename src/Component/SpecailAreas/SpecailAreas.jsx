import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DivAnimation from '../devAnimation/devAnimation';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';

export default function specailAreas() {
  let { data } = useRequist('projects');
  let { language } = useContext(CallContext);
  //filte an array
  let copy = new Set();
  let newData = data?.filter((obj) => {
    if (copy.has(obj?.address.government)) {
      return;
    } else {
      copy.add(obj?.address.government);
      return true;
    }
  });

  return (
    <div className="relative px-5 flex flex-col md:gap-y-20 py-7 max-w-[1300px] mx-auto sm:gap-x-3 ">
      <h1
        className={
          language === 'ar'
            ? `lg:text-[50px] md:text-[40px] text-[30px] font-light areasbefore areasafter`
            : 'lg:text-[50px] md:text-[40px] text-[30px] font-light'
        }
      >
        {language === 'ar' ? 'المناطق المميزة' : 'Featured areas'}
      </h1>
      <div className="imgSlider  grid grid-col-1 gap-y-4 sm:gap-x-3 mt-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 md:gap-4 lg:gap-7">
        {newData?.map((area) => (
          <DivAnimation key={area?.id}>
            <div className="relative w-full h-full overflow-hidden">
              <Link
                to={`SpecailAreasDetails/${area?.address?.government}`}
                className="rounded-3xl shadow-md"
              >
                <img
                  className="w-full rounded-2xl hover:scale-[1.2] h-[100%] hover:transition-all duration-400 ease-in-out "
                  src={area?.media[1]}
                />
                <div className="title absolute left-1/2 -translate-x-1/2 top-2/5 ">
                  <div className="bg-[#f7f4d69f] px-5 py-1 rounded-2xl text-[17px] lg:text-[23px] md:text-[18px] font-medium sm:w-[250px] w-[230px]  text-center">
                    {area?.address.government}
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
