import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../../assets/images/heroImg.jpg';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
export default function CallUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let [isLoading, setIsLoading] = useState(false);
  const handleFormak = (data) => {
    setIsLoading(true);
    axios
      .post('http://localhost:3000/api/contact', data)
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

  return (
    <>
      <div className="w-[100vw] relative">
        <img className="w-full h-[400px] md:h-[500px]  opacity-80" src={img} />
        <h1 className="absolute z-0 -translate-x-1/2 left-1/2 top-1/2 lg:text-[96px] md:text-[90px] sm:text-[80px] text-[50px] font-medium text-[#FEFEFF]">
          اتصل بنا
        </h1>
      </div>
      <div className=" mb-10 mt-[-70px] max-w-[1300px] mx-auto flex justify-center">
        <div className="lg:w-1/2 w-[90%] z-40  bg-white px-5 rounded-md py-10 box-shadow flex flex-col gap-5  top-90 md:top-110">
          <div className="text-center">
            <h1 className="text-[#000000] bg-[#F5F5F5] px-3 py-7 lg:text-[35px] mb-9 md:text-[25px] sm:text-[20px] text-[15px]">
              من فضلك أملئ البيانات للتواصل
            </h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full flex flex-col gap-y-10">
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
                    <div className="font-medium">{formik.errors.fullName}</div>
                  </div>
                ) : null}
                <input
                  name="fullName"
                  placeholder="الأسم"
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
                  placeholder="الأيميل"
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
                  placeholder="ما الذي تود الأستفسار عنه ؟"
                  value={formik.values.topic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full py-5 rounded-lg"
                  type="text"
                  dir="rtl"
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
                    <div className="font-medium">{formik.errors.message}</div>
                  </div>
                ) : null}
                <textarea
                  name="message"
                  placeholder="اترك رسالتك"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[150px] rounded-md"
                  type="text"
                />
              </div>

              {isLoading ? (
                <button className="cursor-pointer w-1/2 lg:w-1/4  mx-auto rounded-md bg-[#063772] py-3 md:py-5 text-[#FFFFFF] text-[20px]">
                  <span className="loader"></span>
                </button>
              ) : (
                <button className="cursor-pointer w-1/2 lg:w-1/4  mx-auto rounded-md bg-[#063772] py-3 md:py-5 text-[#FFFFFF] text-[20px]">
                  سجل الأن
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
