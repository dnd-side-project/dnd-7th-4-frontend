// CHECK:: ForecastTab, WeatherForecast 컴포넌트에서 사용
import { atom } from 'recoil';

const tabMenuAtom = atom({
  key: 'tabMenuAtom',
  default: 0,
});

export default tabMenuAtom;
