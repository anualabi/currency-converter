import { useQuery } from 'react-query';
import axios from 'axios';
import { FormData } from '../types';

interface Props {
  formData: FormData;
  baseCurrency: string;
  targetCurrency: string;
  date: string;
  amount: string;
}

export function useCurrencyConversion({
  formData,
  baseCurrency,
  targetCurrency,
  date,
  amount
}: Props) {
  return useQuery(
    ['conversion', formData],
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/convert?from=${baseCurrency}&to=${targetCurrency}&date=${date}&amount=${amount}&places=3`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
