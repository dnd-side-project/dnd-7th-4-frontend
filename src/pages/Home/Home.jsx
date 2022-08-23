import { getData } from '@Apis/api';
import Footer from '@Components/Footer';
import Header from '@Components/Header';
import MoreWeatherInfo from '@Components/MoreWeatherInfo';
import Splash from '@Components/Splash';
import WeatherForecast from '@Components/WeatherForecast';
import errorAtom from '@Recoil/error';
import weatherAtom, { skyWithSelect } from '@Recoil/weather';
import { useQuery } from '@tanstack/react-query';
import { memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './Home.style';

const Home = () => {
  // CHECK:: Server State와 Client State를 명확히 구분해주어야 하지만 우리 api특성상 Server State를 Global State로 관리할 필요가 있다.
  const setError = useSetRecoilState(errorAtom);
  const setWeather = useSetRecoilState(weatherAtom);
  // CHECK:: 현재 사용자의 위치 정보를 받아 저장하고 사용해줄 필요가 있음.
  // CHECK:: params를 locationValueAtom 참조해서 변경
  const { isLoading, data, error } = useQuery(['weather'], () => getData({ city: '서울특별시', district: '종로구' }));
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setError('404');
      navigate('/error');
    }
  }, [error]);

  useEffect(() => {
    if (!isLoading) {
      setWeather(data);
    }
  }, [isLoading, data]);

  const skyState = useRecoilValue(skyWithSelect);

  return (
    <>
      {/* CHECK:: Container(div)는 개발시 편의를 위해 임의로 설정해둠 */}
      {isLoading ? (
        <Splash />
      ) : (
        <S.Container skyState={skyState}>
          <Header />
          <main>
            <WeatherForecast />
            <MoreWeatherInfo />
          </main>
          <Footer />
        </S.Container>
      )}
    </>
  );
};

export default memo(Home, isEqual);
