import { Routes as AppRoutes, Route, Navigate } from 'react-router-dom';
import CurrencyConverter from '../Project/CurrencyConverter';

const Routes = () => {
  return (
    <AppRoutes>
      <Route index element={<Navigate to="/currency-converter" />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
    </AppRoutes>
  );
};

export default Routes;
