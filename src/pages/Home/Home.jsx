/* eslint-disable prefer-destructuring */
import { getData } from '@Apis/api';
import Background from '@Components/Background';
import Footer from '@Components/Footer';
import Header from '@Components/Header';
import MoreWeatherInfo from '@Components/MoreWeatherInfo';
import Splash from '@Components/Splash';
import UpdateTime from '@Components/UpdateTIme';
import WeatherForecast from '@Components/WeatherForecast';
import alarmLocationAtom from '@Recoil/alarmLocation';
import errorAtom from '@Recoil/error';
import slideMenuAtom from '@Recoil/slideMenu';
import weatherAtom, { skyWithSelect } from '@Recoil/weather';
import { useQuery } from '@tanstack/react-query';
import { memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './Home.style';

const Home = () => {
  const setAlarmLocation = useSetRecoilState(alarmLocationAtom);
  const skyState = useRecoilValue(skyWithSelect);
  const slide = useRecoilValue(slideMenuAtom);
  const setError = useSetRecoilState(errorAtom);
  const setWeather = useSetRecoilState(weatherAtom);

  const city = window.localStorage.getItem('region').split(' ')[0];
  const district = window.localStorage.getItem('region').split(' ')[1];
  const { isLoading, data: weatherData, error } = useQuery(['weather'], () => getData({ city, district }));
  const navigate = useNavigate();

  useEffect(() => {
    setAlarmLocation(JSON.parse(window.localStorage.getItem('alarmLocation')));
  }, []);

  useEffect(() => {
    if (error) {
      setError('404');
      navigate('/error');
    }
  }, [error]);

  useEffect(() => {
    if (!isLoading) {
      setWeather(weatherData);
    }
  }, [isLoading, weatherData]);

  return (
    <Background>
      {isLoading ? (
        <Splash />
      ) : (
        <S.Container skyState={skyState} slide={slide}>
          <Header />
          <main>
            <WeatherForecast />
            <UpdateTime />
            <MoreWeatherInfo />
          </main>
          <Footer />
        </S.Container>
      )}
    </Background>
  );
};

export default memo(Home, isEqual);
