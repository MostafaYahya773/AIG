import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import img from '../../assets/images/heroImg.jpg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import style from './SpecailProducts.module.css';
import SPMatrouh from '../SPMatrouh/SPMatrouh';
import SPGiza from '../SPGiza/SPGiza';
import SPRedsea from '../SPRedsea/SPRedsea';
import SPAlfayoum from '../SPAlfayoum/SPAlfayoum';
import SpCairo from '../SPCairo/SPCairo';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';
export default function SpecailProducts() {
  let [activeComponent, useActiveComponent] = useState('SPMatrouh');
  function activeComponents(name) {
    useActiveComponent(name);
  }

  let { data } = useRequist('projects');
  let { language } = useContext(CallContext);

  return (
    <div className="bg-[#F7F4D6] w-full">
      <div className="Container relative  px-5 py-7 flex flex-col gap-y-20  max-w-[1300px] mx-auto">
        <h1
          className={
            language === 'ar'
              ? `lg:text-[50px] md:text-[40px] text-[30px] font-light areasbefore areasafter`
              : 'lg:text-[50px] md:text-[40px] text-[30px] font-light'
          }
        >
          {language === 'ar' ? 'المشاريع المميزة' : 'Featured projects'}
        </h1>
        <div className="flex justify-center w-full">
          <div className=" flex flex-col  gap-y-10">
            <div className="w-full">
              <ul className="w-full flex justify-center align-center gap-x-4 gap-y-7 flex-wrap lg:px-10 text-nowrap p-3">
                <li>
                  <NavLink
                    to="#"
                    className={
                      activeComponent === 'SPMatrouh'
                        ? style.active
                        : 'bg-[#D9D9D9] shadow shadow-slate-600 px-5 py-1 rounded-2xl  text-[10px] lg:text-[20px]'
                    }
                    onClick={() => activeComponents('SPMatrouh')}
                  >
                    {data?.[0]?.address?.government}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      activeComponent === 'SPGiza'
                        ? style.active
                        : 'bg-[#D9D9D9]  shadow shadow-slate-600 px-5 py-1 rounded-2xl  text-[10px] lg:text-[20px]'
                    }
                    onClick={() => activeComponents('SPGiza')}
                  >
                    {data?.[4]?.address?.government}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      activeComponent === 'SPRedsea'
                        ? style.active
                        : 'bg-[#D9D9D9] shadow shadow-slate-600 px-5 py-1 rounded-2xl  text-[10px] lg:text-[20px]'
                    }
                    onClick={() => activeComponents('SPRedsea')}
                  >
                    {data?.[8]?.address?.government}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      activeComponent === 'SPAlfayoum'
                        ? style.active
                        : 'bg-[#D9D9D9] shadow shadow-slate-600 px-5 py-1 rounded-2xl  text-[10px] lg:text-[20px]'
                    }
                    onClick={() => activeComponents('SPAlfayoum')}
                  >
                    {data?.[7]?.address?.government}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      activeComponent === 'spcairo'
                        ? style.active
                        : 'bg-[#D9D9D9] shadow shadow-slate-600 px-5 py-1 rounded-2xl  text-[10px] lg:text-[20px]'
                    }
                    onClick={() => activeComponents('spcairo')}
                  >
                    {data?.[6]?.address?.government}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              {activeComponent === 'SPMatrouh' && <SPMatrouh />}
              {activeComponent === 'SPGiza' && <SPGiza />}
              {activeComponent === 'SPRedsea' && <SPRedsea />}
              {activeComponent === 'SPAlfayoum' && <SPAlfayoum />}
              {activeComponent === 'spcairo' && <SpCairo />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
