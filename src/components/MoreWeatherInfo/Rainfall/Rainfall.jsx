import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './Rainfall.style';

const Rainfall = () => (
  <S.Wrapper>
    <S.Title>강수 15mm</S.Title>
    <S.Texts>
      <S.Text>우비도 우산도</S.Text>
      <S.Text>무용지물</S.Text>
    </S.Texts>
    {/* <S.Img></S.Img> */}
  </S.Wrapper>
);

export default memo(Rainfall, isEqual);
