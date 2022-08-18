import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './SunriseSunset.style';

const SunriseSunset = () => (
  <S.Wrapper>
    <S.Title>일출일몰</S.Title>
    <S.Texts>
      <S.Text>일몰까지</S.Text>
      <S.Text>3시간 15분!</S.Text>
    </S.Texts>
    {/* <S.Img></S.Img> */}
    <S.Time>
      <S.Sunrise>5:27</S.Sunrise>
      <S.Sunset>15:32</S.Sunset>
    </S.Time>
  </S.Wrapper>
);

export default memo(SunriseSunset, isEqual);
