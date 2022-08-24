import { postSetAlarm } from '@Apis/api';
import defaultProfile from '@Assets/icon/default-profile.svg';
import errorAtom from '@Recoil/error';
import setAlarmLocationAtom from '@Recoil/setAlarmLocation';
import slideMenuAtom from '@Recoil/slideMenu';
import userAtom from '@Recoil/user';
import { useMutation } from '@tanstack/react-query';
import { memo, useEffect, useRef } from 'react';
import isEqual from 'react-fast-compare';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './SlideMenu.style';

const SlideMenu = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_APP_KEY;
  const REDIRECT_URI = 'http://localhost:3000/account/kakao/oauth';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [slide, setSlide] = useRecoilState(slideMenuAtom);
  const bgRef = useRef();

  const [user, setUser] = useRecoilState(userAtom);
  const setError = useSetRecoilState(errorAtom);

  const alarmLocation = useRecoilValue(setAlarmLocationAtom);

  const navigate = useNavigate();

  const { mutate, error } = useMutation(postSetAlarm, {
    onSuccess: async ({ data }) => {
      const {
        data: { kakao_alarm: alarm },
      } = await data;
      setUser((prevUser) => ({ ...prevUser, alarm }));
    },
  });

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify({ ...user }));
  }, [user]);

  useEffect(() => {
    if (error) {
      setError('404');
      navigate('/error');
    }
  }, [error]);

  // CHECK:: localStorage에서 아예 삭제하면 boolean값을 이용한 조건부 렌더링이 안됨
  // useEffect(() => {
  //   if(!user.login && !user.alarm) {
  //     window.localStorage.removeItem('user');
  //   }
  // }, [user])

  const changeAlarm = (e) => {
    e.preventDefault();
    if (user.alarm) {
      setUser((prevUser) => ({ ...prevUser, alarm: false }));
    } else {
      setUser((prevUser) => ({ ...prevUser, alarm: true }));
    }
    mutate(user.access);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    if (user.login) {
      setUser((prevUser) => ({ ...prevUser, login: false }));
    } else {
      setUser((prevUser) => ({ ...prevUser, login: true }));
    }
  };

  return (
    <S.Background
      ref={bgRef}
      onClick={(e) => {
        if (e.target === bgRef.current) setSlide(false);
      }}
    >
      <S.Content slide={slide}>
        <S.UserState>
          <li>
            <img src={user.login ? user.profile_img : defaultProfile} alt="사용자 프로필" />
          </li>
          <li>
            <S.UserInf>
              {user.login ? (
                <>
                  <S.Name>{user.nickname}</S.Name>
                  <S.LoginBtn onClick={handleLogout}>로그아웃</S.LoginBtn>
                </>
              ) : (
                <>
                  <S.Name login>로그인하고 알림 받아보세요</S.Name>
                  <a href={KAKAO_AUTH_URL}>
                    <S.LoginBtn type="submit" login>
                      카카오로 로그인
                    </S.LoginBtn>
                  </a>
                </>
              )}
            </S.UserInf>
          </li>
        </S.UserState>
        <S.Menu>
          <li>
            <S.AlarmInf>
              <li>카톡 날씨알리미</li>
              <li>
                <S.ToggleBtn onClick={changeAlarm} alarm={user.alarm}>
                  <S.Toggle alarm={user.alarm}>날씨 알리미 설정 버튼</S.Toggle>
                </S.ToggleBtn>
              </li>
            </S.AlarmInf>
          </li>
          <S.Item>카톡 날씨알리미란?</S.Item>
          <S.Item>
            <Link to="alarm-location">내 알리미 위치</Link>
            <span>{alarmLocation}</span>
          </S.Item>
        </S.Menu>
      </S.Content>
    </S.Background>
  );
};

export default memo(SlideMenu, isEqual);
