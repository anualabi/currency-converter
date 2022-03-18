import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { InputLabel, Select, MenuItem, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyCode } from '../../shared/constants/currencyCode';
import { SvgCompareArrow } from '../../shared/components';
import { formatTodayDate, formatTimeNow } from '../../shared/utils/date';
import { useLocalStorage } from '../../shared/hooks';
import { FormData, CurrencyCodeType } from '../../shared/types';
import { StyledExchangeForm, StyledBox, StyledTextField, StyledFormControl } from './styles';

interface Props {
  handleSubmit: (values: FormData) => void;
}

export const initialFormValues: FormData = {
  amount: '1',
  baseCurrency: 'EUR',
  targetCurrency: 'USD',
  date: formatTodayDate
};

const ExchangeForm: FC<Props> = ({ handleSubmit }) => {
  const location = useLocation();
  const state = location.state as FormData;
  const [submittedData, setSubmittedData] = useLocalStorage('conversion-history');

  const formik = useFormik({
    initialValues: state || initialFormValues,
    onSubmit: (values: FormData) => {
      handleSubmit(values);
      setSubmittedData([...submittedData, { ...values, id: uuidv4(), time: formatTimeNow }]);
    }
  });

  const handleSwitchCurrency = () => {
    const fromCurrency = formik.values.baseCurrency;
    formik.setFieldValue('baseCurrency', formik.values.targetCurrency);
    formik.setFieldValue('targetCurrency', fromCurrency);
  };

  const currencyCodeSelect = CurrencyCode.map((c: CurrencyCodeType) => (
    <MenuItem key={c.key} value={c.value}>
      {c.value} - {c.name}
    </MenuItem>
  ));

  return (
    <StyledExchangeForm>
      <form onSubmit={formik.handleSubmit}>
        <StyledBox>
          <StyledTextField
            id="amount"
            name="amount"
            label="Amount"
            variant="standard"
            value={formik.values.amount}
            onChange={formik.handleChange}
            required
            type="number"
          />
          <StyledFormControl variant="standard">
            <InputLabel id="base-currency-label">From</InputLabel>
            <Select
              labelId="base-currency-label"
              name="baseCurrency"
              id="base-currency"
              value={formik.values.baseCurrency}
              onChange={formik.handleChange}
              label="From"
              required
            >
              {currencyCodeSelect}
            </Select>
          </StyledFormControl>
          <Button variant="contained" onClick={handleSwitchCurrency}>
            <SvgCompareArrow />
          </Button>
          <StyledFormControl variant="standard">
            <InputLabel id="target-currency-label">To</InputLabel>
            <Select
              labelId="target-currency-label"
              name="targetCurrency"
              id="target-currency"
              value={formik.values.targetCurrency}
              onChange={formik.handleChange}
              label="To"
              required
            >
              {currencyCodeSelect}
            </Select>
          </StyledFormControl>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={Number(formik.values.amount) < 1}
          >
            Convert
          </Button>
        </StyledBox>
      </form>
    </StyledExchangeForm>
  );
};

export default ExchangeForm;
