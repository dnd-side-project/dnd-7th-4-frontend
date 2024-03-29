/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unused-imports/no-unused-vars */
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './SunriseSunset.style';

const SunriseSunset = ({ data, status }) => (
  <S.Wrapper>
    <S.Comments>
      <S.Comment>{data?.코멘트.split('/')[0]}</S.Comment>
      <S.Comment>{data?.코멘트.split('/')[1]}</S.Comment>
    </S.Comments>
    <S.Infos>
      <S.Info>
        <S.InfoTitle>일출</S.InfoTitle>
        <S.InfoTitle>일몰</S.InfoTitle>
      </S.Info>
      <S.Info>
        <S.InfoTexts>{`${status?.일출.slice(0, 2)}:${status?.일출.slice(2, 4)}`}</S.InfoTexts>
        <S.InfoTexts>{`${status?.일몰.slice(0, 2)}:${status?.일몰.slice(2, 4)}`}</S.InfoTexts>
      </S.Info>
    </S.Infos>
  </S.Wrapper>
);

export default memo(SunriseSunset, isEqual);
