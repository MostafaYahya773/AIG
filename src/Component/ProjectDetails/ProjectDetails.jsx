import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CallOurTeam from '../CallOurTeam/CallOurTeam';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useRequist from '../../hooks/useRequest';
import { CallContext } from '../../Context/Context';
export default function ProjectDetails() {
  let [isLoading, setIsLoading] = useState(false);
  let { language } = useContext(CallContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <i
        className="fa-solid fa-chevron-right  text-[25px]  absolute text-center pt-2  right-5 bg-white  w-[40px] h-[40px] rounded-full top-1/3 cursor-pointer text-[#33363F] "
        onClick={onClick}
      ></i>
    );
  }
  function changeImages(src) {
    useNewImg(src);
  }

  const handleFormak = (data) => {
    setIsLoading(true);
    axios
      .post('https://aig-api.onrender.com/api/contact', data)
      .then((response) => {
        setIsLoading(false);
        toast.success(response?.data?.message, {
          duration: 1700,
          position: 'top-center',
          style: {
            background: '#ffffff',
            color: '#063772',
          },
        });
      })
      .catch((regect) => {
        setIsLoading(false);
        toast.error(regect?.response?.data?.message, {
          duration: 1500,
          position: 'top-center',
          style: {
            background: '#ffffff',
            color: '#063772',
          },
        });
      });
  };

  let userError = Yup.object().shape({
    fullName: Yup.string()
      .min(3, 'min 3 length')
      .max(20, 'Max 20 length')
      .required(),
    email: Yup.string().email('Email is not vailed').required(),
    topic: Yup.string()
      .min(5, 'min 5 length')
      .max(70, 'max 70 length')
      .required(),
    message: Yup.string()
      .min(5, 'min 5 length')
      .max(150, 'max 300 length')
      .required(),
  });

  let formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      topic: '',
      message: '',
    },
    validationSchema: userError,
    onSubmit: handleFormak,
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  let { id } = useParams();
  let { data } = useRequist('projects', id);
  let [newimg, useNewImg] = useState(null);
  useEffect(() => {
    if (data?.media?.[0]) {
      useNewImg(data.media[0]);
    }
  }, [data]);
  return (
    <div className="min-h-[100vh]  w-full ">
      <div
        className="hero max-w-[1900px] mx-auto relative md:h-[500px] h-[300px] bg-center bg-cover "
        style={{ backgroundImage: `url(${data?.media[3]})` }}
      >
        <h1 className="lg:text-[90px] w-full text-center md:text-[80px] text-[30px] text-shadow font-medium text-[#FFFFFF] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {data?.title}
        </h1>
      </div>
      <div className="flex gap-y-10 flex-col max-w-[1300px] mx-auto">
        <div className="w-full px-3 ">
          <div className="grid grid-rows-[auto_auto] grid-cols-1 gap-y-5 lg:gap-y-0 lg:grid-cols-[35%_65%] mt-9 ">
            <div className="form  p-2 order-2 lg:order-1">
              <div className="text-center mb-4 border-b-2 border-[#D9D9D9]">
                <h1 className="text-[#000000]  px-3 mb-3 py-2  md:text-[20px] sm:text-[20px] text-[15px]">
                  {language == 'ar' ? 'سجل بياناتك' : 'Register your data'}
                </h1>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="w-full flex flex-col gap-y-3">
                  <div className="name">
                    {formik.errors.fullName && formik.touched.fullName ? (
                      <div
                        className="flex items-center p-4 mb-4 text-sm text-white rounded-lg bg-[#063772] "
                        role="alert"
                      >
                        <svg
                          class="shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div className="font-medium">
                          {formik.errors.fullName}
                        </div>
                      </div>
                    ) : null}
                    <input
                      name="fullName"
                      placeholder={language === 'ar' ? 'الأسم' : 'Name'}
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full py-5 rounded-lg"
                      type="text"
                    />
                  </div>

                  <div className="email">
                    {formik.errors.email && formik.touched.email ? (
                      <div
                        className="flex items-center p-4 mb-4 text-sm text-white rounded-lg bg-[#063772] "
                        role="alert"
                      >
                        <svg
                          class="shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div className="font-medium">{formik.errors.email}</div>
                      </div>
                    ) : null}
                    <input
                      name="email"
                      placeholder={language === 'ar' ? 'الأيميل' : 'Email'}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full py-5 rounded-lg"
                      type="email"
                    />
                  </div>

                  <div className="topic">
                    {formik.errors.topic && formik.touched.topic ? (
                      <div
                        className="flex items-center p-4 mb-4 text-sm text-white rounded-lg bg-[#063772] "
                        role="alert"
                      >
                        <svg
                          class="shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div className="font-medium">{formik.errors.topic}</div>
                      </div>
                    ) : null}
                    <input
                      name="topic"
                      placeholder={
                        language === 'ar'
                          ? 'ما الذي تود الأستفسار عنه ؟'
                          : 'What would you like to ask ?'
                      }
                      value={formik.values.topic}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full py-5 rounded-lg"
                      type="text"
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>

                  <div className="text">
                    {formik.errors.message && formik.touched.message ? (
                      <div
                        className="flex items-center p-4 mb-4 text-sm text-white rounded-lg bg-[#063772] "
                        role="alert"
                      >
                        <svg
                          class="shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div className="font-medium">
                          {formik.errors.message}
                        </div>
                      </div>
                    ) : null}
                    <textarea
                      name="message"
                      placeholder={
                        language === 'ar' ? 'أترك رسالتك' : 'Leave Your Message'
                      }
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full h-[150px] rounded-md"
                      type="text"
                    />
                  </div>

                  {isLoading ? (
                    <button className="cursor-pointer w-1/2   mx-auto rounded-md bg-[#063772] py-3  text-[#FFFFFF] text-[20px]">
                      <span className="loader"></span>
                    </button>
                  ) : (
                    <button className="cursor-pointer w-1/2   mx-auto rounded-md bg-[#063772] py-3  text-[#FFFFFF] text-[20px]">
                      {language === 'ar' ? 'سجل الأن' : 'Regester Now'}
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="ImgContainer relative w-full lg:h-[450px]  order-1  lg:order-2 ">
              <img
                className="h-[100%] w-full rounded-2xl"
                src={newimg}
                alt="img"
              />
              <div className="absolute w-full bottom-0">
                <Slider {...settings}>
                  {data?.media?.map((src, index) => (
                    <div key={index} className="px-2 cursor-pointer">
                      <img
                        onClick={() => changeImages(src)}
                        className="rounded-2xl sm:h-full w-full"
                        src={src}
                        alt="img"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <div className="title bg-[#063772] py-2 md:px-7 text-[#FFFBFB] md:text-[30px] text-[20px] px-5  md:rounded-lg">
            {language === 'ar' ? 'نظرة عامة' : 'General view'}
          </div>
          <div className="content grid grid-cols-2 gap-y-10 md:px-7  gap-x-10   md:grid-cols-3 py-10 md:gap-y-5  md:py-3 md:text-[24px] text-[18px] min-h-[100px] items-center">
            <div className="garash flex flex-col gap-y-2 items-center md:items-start">
              <h1 className="font-medium">
                {language === "'ar" ? 'جراش' : 'crush'}
              </h1>
              <div className="flex gap-x-2 items-center ">
                <div className="number font-bold ">
                  {data?.overview.numberOfGarages}
                </div>
                <i className="fa-solid fa-house"></i>
              </div>
            </div>
            <div className="bethroom flex flex-col gap-y-2 items-center md:items-start ">
              <h1 className="font-medium">
                {language === 'ar' ? 'حمام' : 'bathroom'}
              </h1>
              <div className="flex gap-x-2 items-center">
                <div className="number font-bold">
                  {data?.overview.numberOfBathrooms}
                </div>
                <i className="fa-solid fa-shower"></i>
              </div>
            </div>
            <div className="bed flex flex-col gap-y-2 items-center md:items-start">
              <h1 className="font-medium">
                {language === 'ar' ? 'غرف' : 'Rooms'}
              </h1>
              <div className="flex gap-x-2">
                <div className="number font-bold">
                  {data?.overview.numberOfRooms}
                </div>
                <i className="fa-solid fa-bed"></i>
              </div>
            </div>
            <div className="size flex flex-col gap-y-2 items-center md:items-start">
              <h1 className="font-medium">
                {language === 'ar' ? 'المساحة' : 'Space'} (m2)
              </h1>
              <div className="flex gap-x-2">
                <div className="number font-bold">{data?.overview.size}</div>
                <i className="fa-solid fa-ruler-combined"></i>
              </div>
            </div>
            <div className="completed flex flex-col gap-y-2 items-center md:items-start">
              <h1 className="font-medium">
                {language === 'ar' ? 'سنة الانشاء' : 'Year of construction'}
              </h1>
              <div className="flex gap-x-2">
                <div className="number font-bold">
                  {data?.overview.yearOfEstablishment}
                </div>
              </div>
            </div>
            <div className="type flex flex-col gap-y-2 items-center md:items-start">
              <h1 className="font-medium">
                {language === 'ar' ? 'النوع' : 'type'}
              </h1>
              <div className="flex gap-x-2">
                <div className="number font-bold">
                  {data?.overview.typeOfProject}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2">
          <div className="title bg-[#063772] py-2 text-[#FFFBFB] md:text-[30px] text-[20px] md:px-10 px-5 md:rounded-lg">
            {language === 'ar' ? 'العنوان' : 'Title'}
          </div>
          <div className="content grid sm:grid-cols-2  grid-cols-1 px-2 gap-y-5 sm:gap-y-10 py-10 md:py-3 md:text-[24px] text-[18px] ">
            <div className=" flex flex-col gap-y-5 w-full">
              <div className="font-medium grid grid-cols-2 place-items-center md:place-items-start  ">
                <h1 className="font-bold">
                  {language === 'ar' ? 'المنطقة' : 'Area'}
                </h1>
                <p> {data?.address.area}</p>
              </div>
              <div className="font-medium grid grid-cols-2  place-items-center md:place-items-start">
                <h1 className="font-bold">
                  {language === 'ar' ? 'الدولة' : 'Country'}
                </h1>
                <p> {data?.address.country}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-full ">
              <div className="font-medium grid grid-cols-2 place-items-center md:place-items-start  ">
                <h1 className="font-bold">
                  {language === 'ar' ? 'العنوان' : 'Location'}
                </h1>
                <p> {data?.address.unitPlace}</p>
              </div>
              <div className="font-medium grid grid-cols-2 place-items-center md:place-items-start">
                <h1 className="font-bold">
                  {language === 'ar' ? 'المدينة' : 'City'}
                </h1>
                <p> {data?.address.city}</p>
              </div>
              <div className="font-medium grid grid-cols-2 place-items-center md:place-items-start">
                <h1 className="font-bold">
                  {language === 'ar' ? 'المحافظة' : 'Government'}
                </h1>
                <p> {data?.address.government}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2">
          <div className="title bg-[#063772] py-2 text-[#FFFBFB] md:text-[30px] text-[18px] md:px-10 px-5 md:rounded-lg">
            {language === 'ar' ? 'الوصف' : 'description'}
          </div>
          <div className="flex- flex-col gap-y-7 px-2 py-5 font-medium  ">
            <h1 className="mb-4 mx-7 lg:text-[40px] sm:text-[30px] text-[20px]">
              {language === 'ar' ? `مميزات ${data?.title}` : `${data?.title}`}
            </h1>
            <ul className="flex flex-col gap-5 px-5 ">
              <li className="flex gap-x-2 items-center lg:text-[30px] sm:text-[20px] text-[16px]">
                <i className="fa-solid fa-check"></i>
                {data?.description}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col my-2">
          <div className="title bg-[#063772] py-2 text-[#FFFBFB] md:text-[30px] text-[20px] md:px-10 px-5 md:rounded-lg">
            {language === 'ar' ? 'التفاصيل' : 'Details'}
          </div>
          <div className="content grid sm:grid-cols-2 grid-cols-1 px-2 gap-y-5 sm:gap-y-10 py-10 md:py-3 md:text-[24px] text-[18px] min-h-[200px] ">
            <div className=" flex flex-col gap-y-5 w-full">
              <div className="font-medium grid grid-cols-2 text-center md:text-start ">
                <h1 className="font-bold">
                  {language === 'ar' ? 'المساحة' : 'space'}
                </h1>
                <p> {data?.overview.size}m&sup2; </p>
              </div>
              <div className="font-medium grid grid-cols-2  text-center md:text-start ">
                <h1 className="font-bold">
                  {language === 'ar' ? 'الحالة' : 'State'}
                </h1>
                <p> {data?.status}</p>
              </div>
              <div className="font-medium grid grid-cols-2  text-center md:text-start ">
                <h1 className="font-bold">
                  {language === 'ar' ? 'الحمام' : 'bathroom'}
                </h1>
                <p> {data?.overview.numberOfBathrooms}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 ">
              <div className="font-medium grid grid-cols-2  text-center md:text-start ">
                <h1 className="font-bold">
                  {language === 'ar' ? 'كود الوحدة' : 'Unit code'}
                </h1>
                <p> {data?.overview.codeOfUnit}</p>
              </div>
              <div className="font-medium grid grid-cols-2 text-center md:text-start">
                <h1 className="font-bold">
                  {language === 'ar' ? 'نوع الوحدة' : 'Unit type'}
                </h1>
                <p> {data?.overview.typeOfProject}</p>
              </div>
              <div className="font-medium grid grid-cols-2 text-center md:text-start">
                <h1 className="font-bold">
                  {language === 'ar' ? 'الغرف' : 'Rooms'}{' '}
                </h1>
                <p> {data?.overview.numberOfRooms}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2">
          <div className="title bg-[#063772] py-2 text-[#FFFBFB] md:text-[30px] text-[20px] md:px-10 px-5 md:rounded-lg">
            {language === 'ar' ? ' اهم الخدمات' : 'Services'}
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 md:gap-y-5 gap-y-3 mt-2">
            {data?.servicesOfTheProject.map((ele, index) => (
              <div
                key={index}
                className=" md:text-[22px] text-[18px] text-center md:text-start py-2 font-medium"
              >
                <i className="fa-solid fa-circle-check mx-2 text-[#2495FD]"></i>
                {ele}
              </div>
            ))}
          </div>
        </div>
      </div>
      <CallOurTeam />
    </div>
  );
}
