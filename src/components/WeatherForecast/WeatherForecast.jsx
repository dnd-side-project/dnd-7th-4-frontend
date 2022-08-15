// import * as S from './WeatherForecast.style';
import { fetchTestInfo } from '@Apis/api';
import tabMenuAtom from '@Recoil/tabMenu';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import ForecastTab from './ForecastTab';
import ThisWeek from './ThisWeek';
import Today from './Today';
import Tomorrow from './Tomorrow';

// CHECK:: 다른 폴더나 파일로 빼는 게 나을지 고민
const obj = {
  0: <Today />,
  1: <Tomorrow />,
  2: <ThisWeek />,
};

const WeatherForecast = () => {
  const active = useRecoilValue(tabMenuAtom);
  // console.log(fetchTestInfo());
  const { isLoading, data } = useQuery(['test'], fetchTestInfo);

  if (!isLoading) {
    console.log(data);
  }

  return (
    <main>
      <ForecastTab />
      <section>{obj[active]}</section>
    </main>
  );
};

export default WeatherForecast;
