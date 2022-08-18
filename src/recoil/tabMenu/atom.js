// CHECK:: ForecastTab, WeatherForecast 컴포넌트에서 사용
import { atom } from 'recoil';

const tabMenuAtom = atom({
  key: 'tabMenuAtom',
  default: '오늘',
});

export default tabMenuAtom;
