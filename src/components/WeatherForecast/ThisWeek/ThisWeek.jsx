/* eslint-disable */
import 'dayjs/locale/ko';

import testImg from '@Assets/icon/logo-symbol.svg';
import { weatherWithSelect } from '@Recoil/weather';
import dayjs from 'dayjs';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import * as S from './ThisWeek.style';

dayjs.locale('ko');

const ThisWeek = () => {
  const content = useRecoilValue(weatherWithSelect);

  const getDate = (item) => {
    const date = dayjs().add(item, 'day').format('dd/M.DD');
    return date;
  };

  return (
    <S.Section>
      <S.WeekList>
        <li>
          <S.StandardList>
            <li>오전</li>
            <li>오후</li>
            <li>
              <S.TempList>
                <li>최저</li>
                <li>/</li>
                <li>최고</li>
              </S.TempList>
            </li>
          </S.StandardList>
        </li>
        {Object.keys(content).map((item) => (
          <li key={item}>
            <S.DayList>
              <li>
                <S.DateList>
                  <S.DateItem>{item === '0' ? '오늘' : getDate(item).split('/')[0]}</S.DateItem>
                  <S.DateItem size="true">{getDate(item).split('/')[1]}</S.DateItem>
                </S.DateList>
              </li>
              <li>
                <img src={testImg} alt={content[item]['오전하늘상태']} />
                <S.Percent>{content[item]['오전강수확률']}%</S.Percent>
              </li>
              <li>
                <img src={testImg} alt={content[item]['오후하늘상태']} />
                <S.Percent>{content[item]['오후강수확률']}%</S.Percent>
              </li>
              <li>
                <S.TempList>
                  <li>{content[item]['최저기온'].split('.')[0]}º</li>
                  <li>/</li>
                  <li>{content[item]['최고기온'].split('.')[0]}º</li>
                </S.TempList>
              </li>
            </S.DayList>
          </li>
        ))}
      </S.WeekList>
    </S.Section>
  );
};

export default memo(ThisWeek, isEqual);
