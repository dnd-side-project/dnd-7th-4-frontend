import userProfile from '@Assets/icon/default-profile.svg';

import slideMenuAtom from '@Recoil/slideMenu';
import { memo, useEffect, useRef } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilState } from 'recoil';

import * as S from './SlideMenu.style';

// import { useSetRecoilState } from 'recoil';

// CHECK:: api나 세부 디자인이 안나온 관계로 전체적인 틀만 작업함, 데이터 고려나 세부 스타일링 안함
const SlideMenu = () => {
  // const setSlide = useSetRecoilState(slideMenuAtom);
  const [slide, setSlide] = useRecoilState(slideMenuAtom);

  const bgRef = useRef();

  // CHECK:: 2번 렌더되는지 확인
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('슬라이드메뉴 마운트');
  }, []);

  return (
    <S.Background
      ref={bgRef}
      onClick={(e) => {
        if (e.target === bgRef.current) setSlide(false);
      }}
    >
      <S.Menu className={slide && 'in'}>
        {/* CHECK:: 로그인 전, 로그인 후 구분해서 렌더 */}
        <S.UserState flex>
          <li>{/* <img src={userProfile} alt="사용자 프로필" /> */}</li>
          <li>
            {/* CHECK:: 로그인 전, 로그인 후 텍스트 내용, 폰트 크기, 색상 다름 
                CHECK:: 카카오로 로그인 클릭 시 카카오톡 화면으로 넘어가는건지? 그럼 버튼을 통해 api 호출 
              */}
            <S.LoginInf>
              <S.NoLoginTxt>로그인하고 알림 받아보세요</S.NoLoginTxt>
              <li>
                <S.LoginToKaKao>카카오로 로그인</S.LoginToKaKao>
              </li>
            </S.LoginInf>
          </li>
        </S.UserState>
        {/* CHECK:: '계정, 날씨 알리미란'은 새로운 페이지인지 모름, 디자이너팀에게 문의한 뒤 추후에 Link로 변경하기
            CHECK:: 카톡 날씨알리미의 버튼은 사용자가 클릭하면 즉각적으로 변화가 보여야함
          */}
        <S.MenuList>
          <S.MenuItem>나의 계정</S.MenuItem>
          <li>
            <ul>
              <li>카톡 날씨알리미</li>
              <li />
            </ul>
          </li>
          <S.MenuItem>카톡 날씨알리미란?</S.MenuItem>
          <S.MenuItem>홈화면에 추가</S.MenuItem>
        </S.MenuList>
      </S.Menu>
    </S.Background>
  );
};

export default memo(SlideMenu, isEqual);
