import logoSymbol from '@Assets/icon/logo-symbol.svg';
import logoTxt from '@Assets/icon/logo-txt.svg';
import Background from '@Components/Background';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postFindRegion } from '../../api/api';
import * as S from './SplashPage.style';

const SplashPage = () => {
  const [location, setLocation] = useState({});
  const navigate = useNavigate();

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      window.localStorage.setItem('location', JSON.stringify({ lon, lat }));
      setLocation({ lon, lat });
    });
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  useEffect(() => {
    postFindRegion(location).then((res) => {
      const {
        data: { city, distinct },
      } = res.data;
      window.localStorage.setItem('region', `${city} ${distinct}`);
      navigate('/main');
    });
  }, [location]);

  return (
    <Background>
      <S.Wrapper>
        <img src={logoSymbol} alt="한줄날씨 심볼 아이콘" />
        <img src={logoTxt} alt="한줄날씨 텍스트 아이콘" />
      </S.Wrapper>
    </Background>
  );
};

export default SplashPage;
