/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unused-imports/no-unused-vars */
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './Humidity.style';

const Humidity = ({ data, status }) => (
  <S.Wrapper>
    <S.Comments>
      <S.Comment>{data?.코멘트.split('/')[0]}</S.Comment>
      <S.Comment>{data?.코멘트.split('/')[1]}</S.Comment>
    </S.Comments>
    <S.Infos>
      <S.Info>
        <S.InfoTitle>습도</S.InfoTitle>
        <S.InfoTexts>
          <S.InfoText>{status}</S.InfoText>
          <S.InfoUnit>%</S.InfoUnit>
        </S.InfoTexts>
      </S.Info>
      <S.Img src={data?.이미지url} alt="습도 아이콘" />
    </S.Infos>
  </S.Wrapper>
);

export default memo(Humidity, isEqual);
