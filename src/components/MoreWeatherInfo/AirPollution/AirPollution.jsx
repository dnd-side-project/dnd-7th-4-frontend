/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unused-imports/no-unused-vars */
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './AirPollution.style';

const AirPollution = ({ data, status }) => (
  <S.Wrapper>
    <S.Comments>
      <S.Comment>{data?.코멘트}</S.Comment>
    </S.Comments>
    <S.Infos>
      <S.Info>
        <S.InfoTitle>대기상태</S.InfoTitle>
        <S.InfoText>{status}</S.InfoText>
      </S.Info>
      <S.Img src={data?.이미지url} alt="대기상태 아이콘" />
    </S.Infos>
  </S.Wrapper>
);

export default memo(AirPollution, isEqual);
