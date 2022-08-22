import logoSymbol from '@Assets/icon/logo-symbol.svg';
import logoTxt from '@Assets/icon/logo-txt.svg';

import * as S from './Splash.style';

const Splash = () => (
  <S.Wrapper>
    <img src={logoSymbol} alt="한줄날씨 심볼 아이콘" />
    <img src={logoTxt} alt="한줄날씨 텍스트 아이콘" />
  </S.Wrapper>
);

export default Splash;
