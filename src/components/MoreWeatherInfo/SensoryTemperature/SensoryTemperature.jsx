import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './SensoryTemperature.style';

const SensoryTemperature = () => (
  <S.Wrapper>
    <S.Title>체감온도</S.Title>
    <S.Texts>
      <S.Text>실제온도와</S.Text>
      <S.Text>비슷해요.</S.Text>
    </S.Texts>
    <S.Info>28°</S.Info>
  </S.Wrapper>
);

export default memo(SensoryTemperature, isEqual);
