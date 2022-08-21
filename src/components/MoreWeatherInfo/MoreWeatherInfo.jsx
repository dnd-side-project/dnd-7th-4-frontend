import { skyWithSelect, weatherWithSelect } from '@Recoil/weather';
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
  const weatherInfo = useRecoilValue(weatherWithSelect);
  const skyState = useRecoilValue(skyWithSelect);

  return (
    <S.Section skyState={skyState}>
      <S.Wrapper>
        <AirPollution airPollution={weatherInfo?.미세먼지} />
        <SensoryTemperature />
        <Humidity />
        <Wind />
        <Rainfall />
        <SunriseSunset />
      </S.Wrapper>
    </S.Section>
  );
};

export default memo(MoreWeatherInfo, isEqual);
