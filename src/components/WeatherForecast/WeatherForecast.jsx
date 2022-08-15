// import * as S from './WeatherForecast.style';
import { useMemo, memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';
import tabMenuAtom from '@Recoil/tabMenu';
import Today from './Today';
import Tomorrow from './Tomorrow';
import ThisWeek from './ThisWeek';
import ForecastTab from './ForecastTab';

const WeatherForecast = () => {
  const active = useRecoilValue(tabMenuAtom);

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

const content = {
  0: <Today />,
  1: <Tomorrow />,
  2: <ThisWeek />,
};

export default memo(WeatherForecast, isEqual);
