import React, { useEffect } from 'react';
import useRequist from '../../hooks/useRequest';
import { Link } from 'react-router-dom';
export default function Blog() {
  let { data } = useRequist('blog');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 my-30">
      {data?.map((artical) => (
        <Link
          key={artical?.id}
          to={`/articaldetalis/${artical?.id}`}
          className="w-full h-full px-5 relative"
        >
          <span className={'absolute bg-[#063772] px-3 text-[18px] text-white'}>
            NEW
          </span>
          <img
            className="w-full rounded-md h-full"
            src={artical?.media[0]}
            alt="img"
          />
          <h1 className="sm:text-[19px] px-1 text-end text-[17px] pt-2 lg:text-[18px]">
            {artical?.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}
