/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unused-imports/no-unused-vars */
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './Rainfall.style';

const Rainfall = ({ data, status }) => (
  <S.Wrapper>
    <S.Comments>
      <S.Comment>{data?.코멘트.split('/')[0]}</S.Comment>
      <S.Comment>{data?.코멘트.split('/')[1]}</S.Comment>
    </S.Comments>
    <S.Infos>
      <S.Info>
        <S.InfoTitle>강수</S.InfoTitle>
        <S.InfoTexts>
          {status === '0' ? <S.InfoText>강수없음</S.InfoText> : <S.InfoText>{status}</S.InfoText>}
        </S.InfoTexts>
      </S.Info>
      <S.Img src={data?.이미지url} alt="강수 아이콘" />
    </S.Infos>
  </S.Wrapper>
);

export default memo(Rainfall, isEqual);
