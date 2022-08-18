/* eslint-disable */
import testImg from '@Assets/icon/logo-symbol.svg';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import tabMenuAtom from '@Recoil/tabMenu';
import { useRecoilValue } from 'recoil';

import * as S from './Days.style';
import ThisWeek from '../ThisWeek';

const today = [
  {
    최저기온: '22.0',
    최고기온: '29.0',
    기온: '22',
    차이: '1',
    멘트: '아 맞다! 우산!/잊지말고 챙기세요!',
    캡션: '자외선 지수 높음',
  },
];

const tomorrow = [
  {
    최저기온: '24.0',
    최고기온: '30.0',
    기온: '27',
    차이: '1',
    멘트: '오후 외출시/우산을 챙기세요!',
    캡션: '자외선 지수 매우 높음',
  },
];

const arr2 = [
  { 시간: '지금', 기온: '28' },
  { 시간: '오후 3시', 기온: '28' },
  { 시간: '오후 4시', 기온: '28' },
  { 시간: '오후 5시', 기온: '28' },
  { 시간: '오후 6시', 기온: '28' },
  { 시간: '오후 7시', 기온: '28' },
  { 시간: '오후 8시', 기온: '28' },
  { 시간: '오후 9시', 기온: '28' },
  { 시간: '오후 10시', 기온: '28' },
  { 시간: '오후 11시', 기온: '28' },
  { 시간: '오후 12시', 기온: '28' },
];

const Days = () => {
  const active = useRecoilValue(tabMenuAtom);

  {
    if (active === 0) {
      return (
        <>
          {today.map((item, idx) => (
            <div key={idx}>
              <S.InfList>
                <S.InfListItem minmax>
                  <S.Wrapper>
                    <S.Item>{item.최저기온.split('.')[0]}º</S.Item>
                    <S.Item divider>/</S.Item>
                    <S.Item>{item.최고기온.split('.')[0]}º</S.Item>
                  </S.Wrapper>
                </S.InfListItem>
                <S.InfListItem temp>
                  <S.Wrapper>
                    <S.Item>{item.기온}</S.Item>
                    <S.Item sign>º</S.Item>
                  </S.Wrapper>
                </S.InfListItem>
                <S.InfListItem diff>어제 +{item.차이}º</S.InfListItem>
              </S.InfList>
              <S.CommentWrapper>
                <S.Comment>
                  <li>{item.멘트.split('/')[0]}</li>
                  <li>{item.멘트.split('/')[1]}</li>
                </S.Comment>
                <S.Caption>{item.캡션}</S.Caption>
              </S.CommentWrapper>
            </div>
          ))}
          <S.Timeline>
            {arr2.map((it, idx) => (
              <li key={idx}>
                <S.ItemList>
                  <li>{it.시간}</li>
                  <li>
                    <img src={testImg} alt="구름 조금 아이콘" />
                  </li>
                  <li>{it.기온}º</li>
                </S.ItemList>
              </li>
            ))}
          </S.Timeline>
        </>
      );
    } else if (active === 1) {
      return (
        <>
          {tomorrow.map((item, idx) => (
            <div key={idx}>
              <S.InfList>
                <S.InfListItem minmax>
                  <S.Wrapper>
                    <S.Item>{item.최저기온.split('.')[0]}º</S.Item>
                    <S.Item divider>/</S.Item>
                    <S.Item>{item.최고기온.split('.')[0]}º</S.Item>
                  </S.Wrapper>
                </S.InfListItem>
                <S.InfListItem temp>
                  <S.Wrapper>
                    <S.Item>{item.기온}</S.Item>
                    <S.Item sign>º</S.Item>
                  </S.Wrapper>
                </S.InfListItem>
                <S.InfListItem diff>어제 +{item.차이}º</S.InfListItem>
              </S.InfList>
              <S.CommentWrapper>
                <S.Comment>
                  <li>{item.멘트.split('/')[0]}</li>
                  <li>{item.멘트.split('/')[1]}</li>
                </S.Comment>
                <S.Caption>{item.캡션}</S.Caption>
              </S.CommentWrapper>
            </div>
          ))}
          <S.Timeline>
            {arr2.map((it, idx) => (
              <li key={idx}>
                <S.ItemList>
                  <li>{it.시간}</li>
                  <li>
                    <img src={testImg} alt="구름 조금 아이콘" />
                  </li>
                  <li>{it.기온}º</li>
                </S.ItemList>
              </li>
            ))}
          </S.Timeline>
        </>
      );
    } else {
      return <ThisWeek />;
    }
  }
};

export default memo(Days, isEqual);
