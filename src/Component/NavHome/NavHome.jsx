import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CallContext } from '../../Context/Context';

export default function NavHome() {
  let { language, setLanguage } = useContext(CallContext);

  return (
    <div className="fixed grid grid-cols-[auto_auto_auto] text-[18px] top-20 py-5 mx-auto z-40 w-full">
      <div></div>
      <div className="flex justify-center items-center lg:gap-5 md:gap-3  text-[#063772] ">
        <Link
          to={`/navHomeDetails/سكني/Residential`}
          className="hidden md:block md:px-3 lg:px-12 py-2 bg-transparent  backdrop-blur-md shadow-[#00000040] drop-shadow-2xl font-extrabold shadow rounded-3xl hover:bg-[#063772] md:hover:text-white transition-all duration-400"
        >
          {language === 'ar' ? 'المشروعات السكنية ' : 'Residential projects'}
        </Link>
        <Link
          to={`/navHomeDetails/سياحي/Touristic`}
          className="hidden md:block md:px-3 lg:px-12 py-2 bg-transparent  backdrop-blur-md shadow-[#00000040] drop-shadow-2xl font-extrabold shadow rounded-3xl hover:bg-[#063772] md:hover:text-white transition-all duration-400"
        >
          {language === 'ar' ? 'المشروعات السياحية ' : 'Tourism projects'}
        </Link>

        <Link
          to={`/navHomeDetails/تجاري/Commercial`}
          className="hidden md:block md:px-3 lg:px-12 py-2 bg-transparent  backdrop-blur-md shadow-[#00000040] drop-shadow-2xl font-extrabold shadow rounded-3xl hover:bg-[#063772] md:hover:text-white transition-all duration-400"
        >
          {language === 'ar' ? 'المشروعات التجارية ' : 'Commercial projects'}
        </Link>
      </div>
      <div className="flex items-center text-white">
        <Link
          to={'/callus'}
          className="hidden md:block md:px-12 py-2 shadow-[#00000040] drop-shadow-2xl font-extrabold shadow rounded-3xl bg-[#063772] hover:bg-transparent hover:text-[#063772]"
        >
          {language === 'ar' ? 'تواصل معنا' : 'Contact us'}
        </Link>
      </div>
    </div>
  );
}
