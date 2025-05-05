import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import useRequist from '../../hooks/useRequest';
export default function CounterPage() {
  let { ref, inView } = useInView({ triggerOnce: true });

  let { data } = useRequist('statistic');

  return (
    <div className="bg-[#063772] max-w-[1900px] mt-[-7px] mx-auto font-arabic">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1
         md:grid-cols-3 lg:grid-cols-5  py-3 gap-x-3 gap-y-7">
          {data?.map((ele, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 justify-center items-center"
            >
              <span ref={ref} className="text-[#FFFFFF] font-bold text-[30px] ">
                {inView && (
                  <CountUp
                    start={0}
                    end={ele.value}
                    duration={2}
                    separator=","
                  />
                )}
                <span className="me-2 ">{ele.unit}</span>
              </span>
              <p className="text-[20px] text-[#FFFFFF9C] font-medium">
                {ele.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
