import { Routes, Route, Navigate } from 'react-router-dom';
import CurrencyConverter from '../pages/CurrencyConverter';
import ConversionHistory from '../pages/ConversionHistory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/currency-converter" />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/conversion-history" element={<ConversionHistory />} />
    </Routes>
  );
};

export default AppRoutes;
