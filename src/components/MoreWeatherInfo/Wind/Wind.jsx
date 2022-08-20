/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unused-imports/no-unused-vars */
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './Wind.style';

const Wind = ({ data, status }) => (
  <S.Wrapper>
    <S.Comments>
      <S.Comment>{data?.코멘트}</S.Comment>
    </S.Comments>
    <S.Infos>
      <S.Info>
        <S.InfoTitle>바람</S.InfoTitle>
        <S.InfoTexts>
          <S.InfoText>{status}</S.InfoText>
          <S.InfoUnit>m/s</S.InfoUnit>
        </S.InfoTexts>
      </S.Info>
      <S.Img src={data?.이미지url} alt="바람 아이콘" />
    </S.Infos>
  </S.Wrapper>
);

export default memo(Wind, isEqual);
