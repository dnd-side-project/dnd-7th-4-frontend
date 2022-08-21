import { getData } from '@Apis/api';
import Header from '@Components/Header';
import MoreWeatherInfo from '@Components/MoreWeatherInfo';
import WeatherForecast from '@Components/WeatherForecast';
import weatherAtom, { skyWithSelect } from '@Recoil/weather';
import { useQuery } from '@tanstack/react-query';
import { memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './Home.style';

const Home = () => {
  // CHECK:: Server State와 Client State를 명확히 구분해주어야 하지만 우리 api특성상 Server State를 Global State로 관리할 필요가 있다.
  const setWeather = useSetRecoilState(weatherAtom);
  // CHECK:: 현재 사용자의 위치 정보를 받아 저장하고 사용해줄 필요가 있음.
  // CHECK:: params를 locationValueAtom 참조해서 변경
  const { isLoading, data } = useQuery(['weather'], () => getData({ city: '서울특별시', district: '종로구' }));

  useEffect(() => {
    if (!isLoading) {
      setWeather(data);
    }
  }, [isLoading, data]);

  const skyState = useRecoilValue(skyWithSelect);

  return (
    <>
      {/* CHECK:: Container(div)는 개발시 편의를 위해 임의로 설정해둠 */}
      <S.Container skyState={skyState}>
        <Header />
        <main>
          <WeatherForecast />
          <MoreWeatherInfo />
        </main>
      </S.Container>
    </>
  );
};

export default memo(Home, isEqual);
