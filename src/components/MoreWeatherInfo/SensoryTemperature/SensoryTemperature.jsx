/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unused-imports/no-unused-vars */
import { memo } from 'react';
import { isEqual } from 'react-fast-compare';

import * as S from './SensoryTemperature.style';

const SensoryTemperature = ({ data, status }) => (
  <S.Wrapper>
    <S.Comments>
      <S.Comment>{data?.코멘트.split('/')[0]}</S.Comment>
      <S.Comment>{data?.코멘트.split('/')[1]}</S.Comment>
    </S.Comments>
    <S.Infos>
      <S.Info>
        <S.InfoTitle>체감온도</S.InfoTitle>
        <S.InfoTexts>{status}º</S.InfoTexts>
      </S.Info>
      <S.Img src={data?.이미지url} alt="체감온도 아이콘" />
    </S.Infos>
  </S.Wrapper>
);

export default memo(SensoryTemperature, isEqual);
