import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './Humidity.style';

const Humidity = () => (
  <S.Wrapper>
    <S.Title>습도 50%</S.Title>
    <S.Texts>
      <S.Text>쾌적한</S.Text>
      <S.Text>하루네요!</S.Text>
    </S.Texts>
    {/* <S.Img></S.Img> */}
  </S.Wrapper>
);

export default memo(Humidity, isEqual);
