// import * as S from './WeatherForecast.style';
import { fetchTestInfo } from '@Apis/api';
import tabMenuAtom from '@Recoil/tabMenu';
import { useQuery } from '@tanstack/react-query';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import ForecastTab from './ForecastTab';
import ThisWeek from './ThisWeek';
import Today from './Today';
import Tomorrow from './Tomorrow';

const content = {
  0: <Today />,
  1: <Tomorrow />,
  2: <ThisWeek />,
};

const WeatherForecast = () => {
  const active = useRecoilValue(tabMenuAtom);
  // console.log(fetchTestInfo());
  const { isLoading, data } = useQuery(['test'], fetchTestInfo);

  if (!isLoading) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  // eslint-disable-next-line arrow-body-style
  const getContent = useMemo(() => {
    return content[active];
  }, [active]);

  return (
    <main>
      <ForecastTab />
      <section>{getContent}</section>
    </main>
  );
};

export default memo(WeatherForecast, isEqual);
