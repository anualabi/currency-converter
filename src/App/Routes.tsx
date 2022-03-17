import { Routes as AppRoutes, Route, Navigate } from 'react-router-dom';
import CurrencyConverter from '../Project/CurrencyConverter';
import ConversionHistory from '../Project/ConversionHistory';

const Routes = () => {
  return (
    <AppRoutes>
      <Route index element={<Navigate to="/currency-converter" />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/conversion-history" element={<ConversionHistory />} />
    </AppRoutes>
  );
};

export default Routes;
