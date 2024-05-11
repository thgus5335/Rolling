import { useQuery } from '@tanstack/react-query';
import { getHotApi } from '../apis/getRecentHotApi';

const useFetchHotData = () => {
  const { data: hotData, status } = useQuery({
    queryKey: 'hotData',
    queryFn: async () => {
      const response = await getHotApi();
      return response.results;
    },
  });

  return { hotData, status };
};

export default useFetchHotData;
