import { useQuery } from 'react-query';
import axios from 'axios';
import { FormData } from '../models/form';

export function useTimeSeries(
  duration: string,
  formData: FormData,
  baseCurrency: string,
  startDate: string,
  endDate: string
) {
  return useQuery(
    ['timeSeries', duration, formData],
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/timeseries?start_date=${startDate}&end_date=${endDate}&base=${baseCurrency}`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
