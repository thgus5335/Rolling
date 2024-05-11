// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getHotApi } from '../apis/getRecentHotApi';

const useFetchHotData = () => {
  const { data: hotData, status } = useQuery('hotData', async () => {
    const response = await getHotApi();
    return response.results;
  });

  return { hotData, status };
};

export default useFetchHotData;
