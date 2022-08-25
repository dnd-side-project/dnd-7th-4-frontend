import tabMenuAtom from '@Recoil/tabMenu';
import { skyWithSelect, weatherWithSelect } from '@Recoil/weather';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

import ThisWeek from '../ThisWeek';
import * as S from './Days.style';

const Days = () => {
  const tabName = useRecoilValue(tabMenuAtom);
  const content = useRecoilValue(weatherWithSelect);
  const skyState = useRecoilValue(skyWithSelect);

  const getTime = (item) => {
    let time = '';
    if (parseInt(item, 10) === 0 || parseInt(item, 10) === 24) {
      time = `오전 12시`;
    } else if (parseInt(item, 10) === 12) {
      time = `오후 ${item}시`;
    } else if (parseInt(item, 10) > 23) {
      time = `오전 ${item - 24}시`;
    } else if (parseInt(item, 10) > 12) {
      time = `오후 ${item - 12}시`;
    } else {
      time = `오전 ${item}시`;
    }
    return time;
  };

  if (tabName !== '이번주') {
    return (
      content && (
        <S.Section>
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
            <S.InfListItem diff>
              {String(content['전날기온차이']).includes('-')
                ? `어제 ${content['전날기온차이']}º`
                : `어제 +${content['전날기온차이']}º`}
            </S.InfListItem>
          </S.InfList>
          <S.CommentWrapper skyState={skyState}>
            <S.Comment>
              <li>{content['세부코멘트']['메인']['코멘트'].split('/')[0]}</li>
              <li>{content['세부코멘트']['메인']['코멘트'].split('/')[1]}</li>
            </S.Comment>
            <S.Caption>{content['세부코멘트']['메인']['캡션']}</S.Caption>
          </S.CommentWrapper>
          {tabName === '오늘' ? <S.TodayAnimation skyState={skyState} /> : <S.TomorrowAnimation skyState={skyState} />}
          <S.Mountain skyState={skyState} />
          <S.Timeline>
            {Object.keys(content['시간별정보']).map((item) => (
              <li key={item}>
                <S.ItemList>
                  <li>{getTime(item)}</li>
                  <li>
                    <img src={content['시간별정보'][item][4]} alt={content['시간별정보'][item][1]} />
                  </li>
                  <li>{content['시간별정보'][item][0]}º</li>
                </S.ItemList>
              </li>
            ))}
          </S.Timeline>
        </S.Section>
      )
    );
  }
  return <ThisWeek />;
};

export default memo(Days, isEqual);
