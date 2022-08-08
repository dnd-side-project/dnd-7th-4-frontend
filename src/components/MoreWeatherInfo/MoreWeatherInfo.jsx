import AirPollution from './AirPollution';
import Humidity from './Humidity';
import SensoryTemperature from './SensoryTemperature';
import Wind from './Wind';
import Rainfall from './Rainfall';
import { Wrapper } from './MoreWeatherInfo.style';
import SunriseSunset from './SunriseSunset';

function MoreWeatherInfo() {
  return (
    <>
      <Wrapper>
        <AirPollution />
        <SensoryTemperature />
        <Humidity />
        <Wind />
        <Rainfall />
        <SunriseSunset />
      </Wrapper>
    </>
  );
}

export default MoreWeatherInfo;
