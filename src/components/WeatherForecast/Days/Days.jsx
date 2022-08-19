import testImg from '@Assets/icon/logo-symbol.svg';
import tabMenuAtom from '@Recoil/tabMenu';
import { weatherWithSelect } from '@Recoil/weather';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import ThisWeek from '../ThisWeek';
import * as S from './Days.style';

const Days = () => {
  const tabName = useRecoilValue(tabMenuAtom);
  const content = useRecoilValue(weatherWithSelect);

  if (tabName !== '이번주') {
    return (
      content && (
        <>
          <S.InfList>
            <S.InfListItem minmax>
              <S.Wrapper>
                <S.Item>{content['현재']['최저기온'].split('.')[0]}º</S.Item>
                <S.Item divider>/</S.Item>
                <S.Item>{content['현재']['최고기온'].split('.')[0]}º</S.Item>
              </S.Wrapper>
            </S.InfListItem>
            <S.InfListItem temp>
              <S.Wrapper>
                <S.Item>{content['현재']['기온']}</S.Item>
                <S.Item sign>º</S.Item>
              </S.Wrapper>
            </S.InfListItem>
            <S.InfListItem diff>어제 {content['전날기온차이']}º</S.InfListItem>
          </S.InfList>
          <S.CommentWrapper>
            <S.Comment>
              <li>{content['세부코멘트']['메인']['코멘트'].split('/')[0]}</li>
              <li>{content['세부코멘트']['메인']['코멘트'].split('/')[1]}</li>
            </S.Comment>
            <S.Caption>{content['세부코멘트']['메인']['캡션']}</S.Caption>
          </S.CommentWrapper>
          <S.Timeline>
            {Object.keys(content['시간별정보']).map((item) => (
              <li key={item}>
                <S.ItemList>
                  <li>{item}시</li>
                  <li>
                    <img src={testImg} alt="구름 조금 아이콘" />
                  </li>
                  <li>{content['시간별정보'][item][0]}º</li>
                </S.ItemList>
              </li>
            ))}
          </S.Timeline>
        </>
      )
    );
  }
  return <ThisWeek />;
};

export default memo(Days, isEqual);
