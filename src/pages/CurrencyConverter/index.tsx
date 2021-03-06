import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Box, CircularProgress, Typography, Divider } from '@mui/material';
import { useCurrencyConversion } from '../../shared/hooks/currencyConversion';
import { useTimeSeries } from '../../shared/hooks/timeSeries';
import ExchangeForm, { initialFormValues } from '../../components/ExchangeForm';
import ExchangeHistoryFilter from '../../components/ExchangeHistoryFilter';
import ExchangeHistoryTable from '../../components/ExchangeHistoryTable';
import { formatSevenDaysAgo } from '../../shared/utils/date';
import { FormData } from '../../shared/models/form';
import { StyledConversion } from './styles';

const CurrencyConverter = () => {
  const location = useLocation();
  const state = location.state as FormData;
  const [formData, setFormData] = useState<FormData>(state || initialFormValues);
  const [startDate, setStartDate] = useState<string>(formatSevenDaysAgo);
  const { baseCurrency, targetCurrency, amount, date } = formData;
  const { status: conversionStatus, data: conversionData } = useCurrencyConversion({
    formData,
    baseCurrency,
    targetCurrency,
    date,
    amount
  });
  const { status: timeSeriesStatus, data: timeSeriesData } = useTimeSeries(
    startDate,
    formData,
    baseCurrency,
    startDate,
    date
  );

  const onHandleSubmit = (values: FormData) => setFormData(values);
  const onHandleSelect = (duration: string) => setStartDate(duration);

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
            <StyledConversion>
              <Typography variant="h1">
                {conversionData.query.amount} {conversionData.query.from}
              </Typography>
              <Typography variant="h1">&nbsp;=&nbsp;</Typography>
              <Typography variant="h1" sx={{ color: 'secondary.main' }}>
                {conversionData.result || 0} {conversionData.query.to}
              </Typography>
            </StyledConversion>
            <Typography variant="body1" sx={{ my: 1 }}>
              1 {conversionData.query.from} = {conversionData.info.rate} {conversionData.query.to}
            </Typography>
          </Box>
        )}
      </Box>
      <Divider />
      <Box sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Exchange History
        </Typography>
        <ExchangeHistoryFilter handleSelect={onHandleSelect} />
        {timeSeriesStatus === 'loading' ? (
          <CircularProgress color="inherit" />
        ) : timeSeriesStatus === 'error' ? (
          <Typography variant="body1" color="red">
            Unable to get exchange history.
          </Typography>
        ) : (
          <ExchangeHistoryTable history={timeSeriesData.rates} targetCurrency={targetCurrency} />
        )}
      </Box>
    </Container>
  );
};

export default CurrencyConverter;
