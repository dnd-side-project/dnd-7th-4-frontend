import testImg from '@Assets/icon/logo-symbol.svg';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

import * as S from './ThisWeek.style';

const ThisWeek = () => (
  <>
    <S.SummaryTitle>대체로 맑음</S.SummaryTitle>
    <S.CommentDiv>
      <S.CommentTitle>화요일, 목요일에는 우산 챙기세요.</S.CommentTitle>
      <p>강수확률 화 70%, 목 80%</p>
    </S.CommentDiv>
    <S.ThisWeekList>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
      <li>
        <S.ThisWeekSubList>
          <li>
            <ul>
              <li>오늘</li>
              <li>7.24</li>
            </ul>
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>
            <img src={testImg} alt="날씨 이모티콘" />
          </li>
          <li>28/22</li>
        </S.ThisWeekSubList>
      </li>
    </S.ThisWeekList>
  </>
);

export default memo(ThisWeek, isEqual);
