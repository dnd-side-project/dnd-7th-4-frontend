import alram from '@Assets/icon/alarm.svg';
import leftArrow from '@Assets/icon/left-arrow.svg';
import rain from '@Assets/icon/rain.svg';
import sun from '@Assets/icon/sun.svg';
import sunCloudy from '@Assets/icon/sun-with-cloud.svg';
import { memo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Link } from 'react-router-dom';

import * as S from './Alarm.style';

// 유저의 로그인 상태, 카카오톡 알림 설정 유무에 따라 Alram 화면이 변화한다.
// 주석 추가

const Alarm = () => {
  const [user, setUser] = useState({
    id: 1,
    login: true,
    alarm: true,
  });
  const contents = [
    {
      main: '날씨알리미를 사용해보세요!',
      sub: '날씨를 확인하는 가장 빠른 방법',
      sub2: '카톡으로 매일 아침 받아보는 한줄 날씨요약',
    },
    {
      main: '날씨알리미를 사용 중이시네요',
      sub: '카톡으로 매일 아침 오늘 날씨 요약을 보내드려요.',
    },
    {
      main: '앗, 날씨알리미가 꺼져있어요',
      sub: '카톡으로 매일 아침 받아보는 한줄 날씨요약,',
      sub2: '지금 바로 시작해보세요!',
    },
  ];

  const changeAlarm = (event) => {
    event.preventDefault();
    if (user.alarm) {
      setUser((prevUser) => ({ ...prevUser, alarm: false }));
    } else {
      setUser((prevUser) => ({ ...prevUser, alarm: true }));
    }
  };
  return (
    <S.Container>
      <header>
        <Link to="/">
          <img src={leftArrow} alt="나가기 아이콘" />
        </Link>
      </header>
      <main>
        <S.Wrapper>
          <S.Icons>
            <S.Icon>
              <img src={sun} alt="맑음 아이콘" />
            </S.Icon>
            <S.Icon>
              <img src={sunCloudy} alt="구름많음 아이콘" />
            </S.Icon>
            <S.Icon>
              <img src={rain} alt="비 아이콘" />
            </S.Icon>
          </S.Icons>
          <img src={alram} alt="알람 아이콘" />
          <S.Title>{user.alarm ? contents[1].main : contents[2].main}</S.Title>
          <S.Texts>
            <p>{user.alarm ? contents[1].sub : contents[2].sub}</p>
            <p>{user.alarm ? '' : contents[2].sub2}</p>
          </S.Texts>
          {user.login ? (
            <S.Button onClick={changeAlarm} alarm={user.alarm}>
              <S.ButtonText alarm={user.alarm}>{user.alarm ? 'ON' : 'OFF'}</S.ButtonText>
              <S.ButtonCircle alarm={user.alarm} />
            </S.Button>
          ) : null}
        </S.Wrapper>
      </main>
    </S.Container>
  );
};

export default memo(Alarm, isEqual);
