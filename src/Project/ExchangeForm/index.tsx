import { FC } from 'react';
import { useFormik } from 'formik';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { CurrencyCode } from '../../shared/constants/currencyCode';
import { SvgCompareArrow } from '../../shared/components';
import { formatTodayDate } from '../../shared/utils/date';
import { FormData, CurrencyCodeType } from '../../shared/types';
import { StyledExchangeForm, StyledBox } from './styles';

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
  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: (values: FormData) => {
      handleSubmit(values);
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
          <TextField
            id="amount"
            name="amount"
            label="Amount"
            variant="standard"
            value={formik.values.amount}
            onChange={formik.handleChange}
            sx={{ mx: 1, my: 2, minWidth: 120 }}
            required
            type="number"
          />
          <FormControl variant="standard" sx={{ mx: 1, my: 2, minWidth: 290 }}>
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
          </FormControl>
          <Button variant="contained" onClick={handleSwitchCurrency}>
            <SvgCompareArrow />
          </Button>
          <FormControl variant="standard" sx={{ mx: 1, my: 2, minWidth: 290 }}>
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
          </FormControl>
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
