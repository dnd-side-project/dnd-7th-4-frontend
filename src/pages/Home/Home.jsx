import * as S from './Home.style';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import Header from '@Components/Header';
import WeatherForecast from '@Components/WeatherForecast';

const Home = () => {
  return (
    <>
      {/* CHECK:: Container(div)는 개발시 편의를 위해 임의로 설정해둠 */}
      <S.Container>
        <Header />
        <WeatherForecast />
      </S.Container>
    </>
  );
};

export default memo(Home, isEqual);
