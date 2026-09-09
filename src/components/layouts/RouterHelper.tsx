import { Route, Routes } from 'react-router-dom';

import AllCountries from '../AllCountries/Index';
import CountrieDetail from '../CountrieDetail/Index';
import NotFound from './NotFound';

export default function RouterHelper() {
  return (
    <Routes>
      <Route path="/" element={<AllCountries />} />
      <Route path="/:id" element={<CountrieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
