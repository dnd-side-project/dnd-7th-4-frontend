// import * as S from './WeatherForecast.style';
import { useRecoilValue } from 'recoil';
import tabMenuAtom from '@Recoil/tabMenu';
import Today from './Today';
import Tomorrow from './Tomorrow';
import ThisWeek from './ThisWeek';
import ForecastTab from './ForecastTab';

const WeatherForecast = () => {
  const active = useRecoilValue(tabMenuAtom);

  return (
    <main>
      <ForecastTab />
      <section>{obj[active]}</section>
    </main>
  );
};

// CHECK:: 다른 폴더나 파일로 빼는 게 나을지 고민
const obj = {
  0: <Today />,
  1: <Tomorrow />,
  2: <ThisWeek />,
};

export default WeatherForecast;
