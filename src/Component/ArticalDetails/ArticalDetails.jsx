import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useRequist from '../../hooks/useRequest';
import { useParams } from 'react-router-dom';
export default function ArticalDetails() {
  let language = localStorage.getItem('lang');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { id } = useParams();

  let { data } = useRequist('blog', id);

  return (
    <div className="max-w-[1900px] mx-auto  flex flex-col lg:gap-15 md:gap-13 gap-15 mb-10">
      <div
        className="hero relative md:h-[500px] h-[300px] bg-center bg-cover "
        style={{ backgroundImage: `url(${data?.media[0]})` }}
      >
        <h1 className="lg:text-[50px] md:text-[30px] text-[30px] w-full text-shadow font-medium text-[#FFFFFF] absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2">
          {data?.title}
        </h1>
        <p className="absolute text-white p-1 z-10 -bottom-12 lg:px-10 md:px-5 flex gap-x-2 bg-[#063772] ">
          <span>
            {language === 'ar' ? 'تاريخ النشر' : 'Publication date'} :
          </span>
          {data?.createdAt.slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-col lg:gap-y-8 md:gap-y-8 gap-y-5 ">
        <h1 className="text-[#063772] font-medium lg:text-[40px] text-[22px] md:text-[30px] lg:px-10 md:px-5 px-2">
          {data?.title}
        </h1>
        <div className="content bg-[#063772E3] lg:px-15 md:px-5 px-2 py-2 text-[#F9F1F1] text-[20px] md:text-[36px] font-medium ">
          <h2>{language === 'ar' ? 'المحتوي' : 'Content'}</h2>
        </div>
        <p className="lg:text-[36px] md:text-[20px] lg:px-15 md:px-5 px-2  font-medium">
          {data?.content}
        </p>
      </div>
    </div>
  );
}
