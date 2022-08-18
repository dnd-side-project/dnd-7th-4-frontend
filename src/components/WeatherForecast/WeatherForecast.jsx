// import * as S from './WeatherForecast.style';
import tabMenuAtom from '@Recoil/tabMenu';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import ForecastTab from './ForecastTab';
import ThisWeek from './ThisWeek';
import Today from './Today';
import Tomorrow from './Tomorrow';

const content = {
  오늘: <Today />,
  내일: <Tomorrow />,
  이번주: <ThisWeek />,
};

const WeatherForecast = () => {
  const active = useRecoilValue(tabMenuAtom);

  const getContent = useMemo(() => content[active], [active]);

  return (
    <main>
      <ForecastTab />
      <section>{getContent}</section>
    </main>
  );
};

export default memo(WeatherForecast, isEqual);
