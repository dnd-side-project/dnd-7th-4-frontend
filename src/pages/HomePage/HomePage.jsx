import Header from '@Components/Header';
import WeatherForecast from '@Components/WeatherForecast';

import * as S from './Home.style';

const HomePage = () => (
  <>
    {/* CHECK:: Container(div)는 개발시 편의를 위해 임의로 설정해둠 */}
    <S.Container>
      <Header />
      <WeatherForecast />
    </S.Container>
  </>
);

export default HomePage;
