import * as S from './Today.style';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import partlyCloudy from '@Assets/partlyCloudy.png';

const Today = () => {
  return (
    <>
      <S.InfList>
        <S.InfListItem>대체로 맑음</S.InfListItem>
        <S.InfListItem big>25º</S.InfListItem>
        <S.InfListItem small>어제 +1º</S.InfListItem>
        <S.InfListItem>22º/29º</S.InfListItem>
        <S.InfListItem small margin>
          미세먼지 좋음
        </S.InfListItem>
      </S.InfList>
      <S.CommentDiv>
        <S.CommentTitle>오후 외출시 우산을 챙기세요!</S.CommentTitle>
        <S.CommentSubTitle>자외선 지수 매우 높음</S.CommentSubTitle>
      </S.CommentDiv>
      <S.TimelineList>
        <li>
          <S.TimelineSubList>
            <li>지금</li>
            <li>
              <img src={partlyCloudy} alt="구름 조금 아이콘" />
            </li>
            <li>29º</li>
          </S.TimelineSubList>
        </li>
        <li>
          <S.TimelineSubList>
            <li>오후 3시</li>
            <li>
              <img src={partlyCloudy} alt="구름 조금 아이콘" />
            </li>
            <li>29º</li>
          </S.TimelineSubList>
        </li>
        <li>
          <S.TimelineSubList>
            <li>오후 3시</li>
            <li>
              <img src={partlyCloudy} alt="구름 조금 아이콘" />
            </li>
            <li>29º</li>
          </S.TimelineSubList>
        </li>
        <li>
          <S.TimelineSubList>
            <li>오후 3시</li>
            <li>
              <img src={partlyCloudy} alt="구름 조금 아이콘" />
            </li>
            <li>29º</li>
          </S.TimelineSubList>
        </li>
        <li>
          <S.TimelineSubList>
            <li>오후 3시</li>
            <li>
              <img src={partlyCloudy} alt="구름 조금 아이콘" />
            </li>
            <li>29º</li>
          </S.TimelineSubList>
        </li>
        <li>
          <S.TimelineSubList>
            <li>오후 3시</li>
            <li>
              <img src={partlyCloudy} alt="구름 조금 아이콘" />
            </li>
            <li>29º</li>
          </S.TimelineSubList>
        </li>
      </S.TimelineList>
    </>
  );
};

export default memo(Today, isEqual);
