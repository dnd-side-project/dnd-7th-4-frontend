import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './Wind.style';

const Wind = () => (
  <S.Wrapper>
    <S.Title>바람 2m/s</S.Title>
    <S.Texts>
      <S.Text>기분좋은</S.Text>
      <S.Text>남실바람</S.Text>
    </S.Texts>
    {/* <S.Img></S.Img> */}
  </S.Wrapper>
);

export default memo(Wind, isEqual);
