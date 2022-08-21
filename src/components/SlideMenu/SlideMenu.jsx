import defaultProfile from '@Assets/icon/default-profile.svg';
import slideMenuAtom from '@Recoil/slideMenu';
import { memo, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilState } from 'recoil';

import * as S from './SlideMenu.style';

// CHECK:: 나의 계정, 카톡 날씨알리미란은 페이지 생기면 Link 추가
// CHECK:: 로그인 기능 완료 되면 관련 recoil 이용하기
const SlideMenu = () => {
  // const setSlide = useSetRecoilState(slideMenuAtom);
  const [slide, setSlide] = useRecoilState(slideMenuAtom);
  const [alarm, setAlarm] = useState(false);
  const [login, setLogin] = useState(false);

  const bgRef = useRef();

  const user = {
    name: '김하루',
    userProfile: '',
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
            <img src={login ? user.userProfile : defaultProfile} alt="사용자 프로필" />
          </li>
          <li>
            <S.UserInf>
              {login ? (
                <>
                  <S.Name>{user.name}</S.Name>
                  <S.LoginBtn onClick={() => setLogin(false)}>로그아웃</S.LoginBtn>
                </>
              ) : (
                <>
                  <S.Name logout>로그인하고 알림 받아보세요</S.Name>
                  <S.LoginBtn onClick={() => setLogin(true)} logout>
                    카카오로 로그인
                  </S.LoginBtn>
                </>
              )}
            </S.UserInf>
          </li>
        </S.UserState>
        <S.Menu>
          <S.Item>나의 계정</S.Item>
          <li>
            <S.AlarmInf>
              <li>카톡 날씨알리미</li>
              <li>
                <S.ToggleBtn onClick={() => setAlarm(!alarm)} alarm={alarm}>
                  <S.Toggle alarm={alarm}>날씨 알리미 설정 버튼</S.Toggle>
                </S.ToggleBtn>
              </li>
            </S.AlarmInf>
          </li>
          <S.Item>카톡 날씨알리미란?</S.Item>
        </S.Menu>
      </S.Content>
    </S.Background>
  );
};

export default memo(SlideMenu, isEqual);
