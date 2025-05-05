import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { CallContext } from '../Context/Context';

export default function useRequist(endpoint, id = '') {
  let { language } = useContext(CallContext);
  const getData = () => {
    const url = id
      ? `https://aig-api.onrender.com/api/${endpoint}/${id}?lang=${language}`
      : `https://aig-api.onrender.com/api/${endpoint}?lang=${language}`;
    return axios.get(url);
  };

  let data = useQuery({
    queryKey: ['getApi', endpoint, id],
    queryFn: getData,
    select: (data) => data.data,
  });

  return data;
}
