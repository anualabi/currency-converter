import { useState } from 'react';
import { Container, Box, CircularProgress, Typography, Divider } from '@mui/material';
import { useCurrencyConversion } from '../../shared/hooks';
import ExchangeForm, { initialFormValues } from '../ExchangeForm';
import { FormData } from '../../shared/types';

const CurrencyConverter = () => {
  const [formData, setFormData] = useState<FormData>(initialFormValues);
  const { baseCurrency, targetCurrency, amount, date } = formData;
  const { status: conversionStatus, data: conversionData } = useCurrencyConversion({
    formData,
    baseCurrency,
    targetCurrency,
    date,
    amount
  });

  const onHandleSubmit = (values: FormData) => setFormData(values);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 5 }}>
        <Typography variant="h1" sx={{ mt: 2, mb: 3 }}>
          I want to convert
        </Typography>
        <ExchangeForm handleSubmit={onHandleSubmit} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        {conversionStatus === 'loading' ? (
          <CircularProgress color="inherit" />
        ) : conversionStatus === 'error' ? (
          <Typography variant="body1" color="red">
            Unable to get exchange rate.
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h1">
                {conversionData.query.amount} {conversionData.query.from}&nbsp;=
              </Typography>
              <Typography variant="h1" sx={{ color: 'secondary.main' }}>
                &nbsp;{conversionData.result || 0} {conversionData.query.to}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ my: 1 }}>
              1 {conversionData.query.from} = {conversionData.info.rate} {conversionData.query.to}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default CurrencyConverter;
