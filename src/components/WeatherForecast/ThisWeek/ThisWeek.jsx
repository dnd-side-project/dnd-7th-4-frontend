import testImg from '@Assets/icon/logo-symbol.svg';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

import * as S from './ThisWeek.style';

const arr = [
  { 요일: '오늘', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
  { 요일: '화', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
  { 요일: '수', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
  { 요일: '목', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
  { 요일: '금', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
  { 요일: '토', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
  { 요일: '일', 날짜: '7/38', 최저온도: '22', 최고온도: '28' },
];

const ThisWeek = () => (
  <>
    <S.CommentDiv>
      <S.CommentTitle>화요일, 목요일에는 우산 챙기세요.</S.CommentTitle>
    </S.CommentDiv>
    <S.WeekList>
      {arr.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={idx}>
          <S.DayList>
            <li>
              <S.DateList>
                <S.DateItem>{item.요일}</S.DateItem>
                <S.DateItem size="true">{item.날짜}</S.DateItem>
              </S.DateList>
            </li>
            <li>
              <img src={testImg} alt="날씨 이모티콘" />
            </li>
            <li>
              <img src={testImg} alt="날씨 이모티콘" />
            </li>
            <li>
              {item.최저온도}º / {item.최고온도}º
            </li>
          </S.DayList>
        </li>
      ))}
    </S.WeekList>
  </>
);

export default memo(ThisWeek, isEqual);
