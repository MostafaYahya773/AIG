import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import 'flowbite';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import style from './Nav.module.css';
import { CallContext } from '../../Context/Context';

export default function Nav() {
  let { language, setLanguage } = useContext(CallContext);
  let [isClick, useIsClick] = useState(false);

  return (
    <div>
      <nav className="bg-[#063772] fixed left-0 w-full top-0 right-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'}>
            <img
              src={logo}
              className="lg:w-[45px] lg:scale-[2] mx-3 w-[40px] scale-[2] "
              alt="Flowbite Logo"
            />
          </Link>

          <div className="flex lg:justify-center lg:items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div
              type="button"
              className="text-white flex justify-center items-center  "
            >
              <div className="relative">
                <i
                  onClick={() => {
                    useIsClick(!isClick);
                  }}
                  className="fa-solid fa-globe cursor-pointer text-[18px] mt-2"
                ></i>
                {isClick && (
                  <ul className=" shadow-lg cursor-pointer absolute z-50 bg-white left-5 rounded-md -translate-x-1/3 top-10  flex flex-col gap-y-1  ">
                    <li
                      onClick={() => {
                        setLanguage('ar');
                        useIsClick(!isClick);
                      }}
                      className="px-4 py-1 text-[#063772] hover:bg-[#0637727f] hover:text-[#ffffff]"
                    >
                      Arabic
                    </li>
                    <li
                      onClick={() => {
                        setLanguage('en');
                        useIsClick(!isClick);
                      }}
                      className="px-4 py-1 text-[#063772] hover:bg-[#0637727f] hover:text-[#ffffff]"
                    >
                      English
                    </li>
                  </ul>
                )}
              </div>
              <span className="mx-2 hidden md:block">|</span>
              <a
                className="flex items-center lg:text-[20px] md:text-[16px]"
                href="tel:00112233445"
              >
                <p className="hidden md:block">00112233445</p>
                <i className="fa-solid fa-phone mx-4"></i>
              </a>
            </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="md:flex items-center justify-between hidden w-full md:w-auto  "
            id="navbar-cta"
          >
            <ul className="flex flex-col lg:text-[20px] md:text-[18px] gap-x-10 justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-white md:space-x-8 rtl:space-x-reverse md:flex-row  md:mt-0 md:border-0 ">
              <li className="mt-4 md:m-0">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? style.active
                      : 'block md:p-0 md:bg-transparent md:hover:bg-transparent hover:bg-gray-100'
                  }
                >
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </NavLink>
              </li>
              <li className="mt-4 md:m-0 relative">
                <NavLink
                  to={'/projects'}
                  className={({ isActive }) =>
                    isActive
                      ? style.active
                      : 'block md:p-0 md:bg-transparent md:hover:bg-transparent hover:bg-gray-100'
                  }
                >
                  {language === 'ar' ? 'المشروعات' : 'Projects'}
                </NavLink>
              </li>

              <li className="mt-4 md:m-0">
                <NavLink
                  to={'/blog'}
                  className={({ isActive }) =>
                    isActive
                      ? style.active
                      : 'block md:p-0 md:bg-transparent md:hover:bg-transparent hover:bg-gray-100'
                  }
                >
                  {language === 'ar' ? 'المدونة' : 'Blog'}
                </NavLink>
              </li>

              <li className="mt-4 md:m-0">
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    isActive
                      ? style.active
                      : 'block md:p-0 md:bg-transparent md:hover:bg-transparent hover:bg-gray-100'
                  }
                >
                  {language === 'ar' ? 'عنا' : 'About Us'}
                </NavLink>
              </li>

              <li className="mt-4 md:m-0 md:hidden">
                <Link
                  to={'/navHomeDetails/سكني/Residential'}
                  className="block md:p-0  "
                >
                  {language === 'ar'
                    ? 'المشروعات السكنية '
                    : 'Residential projects'}
                </Link>
              </li>
              <li className="mt-4 md:m-0 md:hidden">
                <Link
                  to={'/navHomeDetails/سياحي/Touristic'}
                  className="block md:p-0 "
                >
                  {language === 'ar'
                    ? 'المشروعات السياحية '
                    : 'Tourism projects'}
                </Link>
              </li>
              <li className="mt-4 md:m-0 md:hidden">
                <Link
                  to={'/navHomeDetails/تجاري/Commercial'}
                  className="block md:p-0  "
                >
                  {language === 'ar'
                    ? 'المشروعات التجارية '
                    : 'Commercial projects'}
                </Link>
              </li>
              <li className="mt-4 md:m-0 md:hidden">
                <Link
                  to={'/callus'}
                  className="block md:p-0  hover:bg-gray-100 md:hover:bg-transparent"
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Contact us'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
