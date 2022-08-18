// import { fetchTestInfo } from '@Apis/api';
// import tabMenuAtom from '@Recoil/tabMenu';
// import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

import Days from './Days';
import ForecastTab from './ForecastTab';
// import * as S from './WeatherForecast.style';

const WeatherForecast = () => (
  <main>
    <ForecastTab />
    <Days />
  </main>
);
export default memo(WeatherForecast, isEqual);
