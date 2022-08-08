// import * as S from './WeatherForecast.style';
import { useRecoilValue } from 'recoil';
import tabMenuAtom from '@Recoil/tabMenu';
import TodayForecast from './TodayForecast';
import TomorrowForecast from './TomorrowForecast';
import WeeklyForecast from './WeeklyForecast';
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
  0: <TodayForecast />,
  1: <TomorrowForecast />,
  2: <WeeklyForecast />,
};

export default WeatherForecast;
