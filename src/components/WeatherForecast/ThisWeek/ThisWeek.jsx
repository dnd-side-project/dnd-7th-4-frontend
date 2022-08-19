import testImg from '@Assets/icon/logo-symbol.svg';
import { weatherWithSelect } from '@Recoil/weather';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import * as S from './ThisWeek.style';

const ThisWeek = () => {
  const content = useRecoilValue(weatherWithSelect);
  // eslint-disable-next-line no-console
  console.log('content', content);

  return (
    <>
      <S.CommentDiv>
        <S.CommentTitle>화요일, 목요일에는 우산 챙기세요.</S.CommentTitle>
      </S.CommentDiv>
      <S.WeekList>
        {Object.keys(content).map((item) => (
          <li key={item}>
            <S.DayList>
              <li>
                <S.DateList>
                  <S.DateItem>오늘</S.DateItem>
                  <S.DateItem size="true">일</S.DateItem>
                </S.DateList>
              </li>
              <li>
                <img src={testImg} alt="날씨 이모티콘" />
                <S.Percent>{content[item]['오전강수확률']}%</S.Percent>
              </li>
              <li>
                <img src={testImg} alt="날씨 이모티콘" />
                <S.Percent>{content[item]['오후강수확률']}%</S.Percent>
              </li>
              <li>
                {content[item]['최저기온'].split('.')[0]}º / {content[item]['최고기온'].split('.')[0]}º
              </li>
            </S.DayList>
          </li>
        ))}
      </S.WeekList>
    </>
  );
};

export default memo(ThisWeek, isEqual);
