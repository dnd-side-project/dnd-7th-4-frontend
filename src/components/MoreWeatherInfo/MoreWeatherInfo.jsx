import tabMenuAtom from '@Recoil/tabMenu';
import { weatherWithBackImg, weatherWithSelect } from '@Recoil/weather';
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import AirPollution from './AirPollution';
import Humidity from './Humidity';
import * as S from './MoreWeatherInfo.style';
import Rainfall from './Rainfall';
import SensoryTemperature from './SensoryTemperature';
import SunriseSunset from './SunriseSunset';
import Wind from './Wind';

const MoreWeatherInfo = () => {
  const tabMenu = useRecoilValue(tabMenuAtom);
  const weatherInfo = useRecoilValue(weatherWithSelect);
  const backImg = useRecoilValue(weatherWithBackImg);

  if (tabMenu !== '이번주') {
    return (
      <S.Section backImg={backImg}>
        <S.Wrapper>
          <AirPollution data={weatherInfo?.세부코멘트.미세먼지} status={weatherInfo?.미세먼지} />
          <Rainfall data={weatherInfo?.세부코멘트.강수} status={weatherInfo?.현재['1시간강수량']} />
          <SensoryTemperature data={weatherInfo?.세부코멘트.체감온도} status={weatherInfo?.체감온도} />
          <Humidity data={weatherInfo?.세부코멘트.습도} status={weatherInfo?.현재['습도']} />
          <Wind data={weatherInfo?.세부코멘트.바람} status={weatherInfo?.현재['풍속']} />
          <SunriseSunset data={weatherInfo?.세부코멘트.일몰일출} status={weatherInfo?.일몰일출} />
        </S.Wrapper>
      </S.Section>
    );
  }
  return null;
};

export default memo(MoreWeatherInfo, isEqual);
