/* eslint-disable react/prop-types */

import * as S from './Background.style';

const Background = ({ children }) => (
  <S.Wrapper>
    <S.Mobile>{children}</S.Mobile>
  </S.Wrapper>
);

export default Background;
