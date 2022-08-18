import alarm from '@Assets/icon/alarm.svg';
import navMenu from '@Assets/icon/menu.svg';
import share from '@Assets/icon/share.svg';
import SlideMenu from '@Components/SlideMenu';
import slideMenuAtom from '@Recoil/slideMenu';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './Header.style';

const Header = () => {
  const [slide, setSlide] = useRecoilState(slideMenuAtom);

  const renderSlideMenu = useCallback(() => <SlideMenu />, []);

  // CHECK:: 공유 페이지는 아직 작업 전이라 임의로 /example 연결해둠
  return (
    <>
      <S.HearderNav>
        <S.HeaderList>
          <li>
            <Link to="/location">위치 페이지</Link>
          </li>
          <li>
            <S.HeaderList sub>
              <li>
                <Link to="/alram">
                  <img src={alarm} alt="알림 페이지" />
                </Link>
              </li>
              <li>
                <Link to="/example">
                  <img src={share} alt="공유 페이지" />
                </Link>
              </li>
              <li>
                <S.HeaderButton onClick={() => setSlide(true)}>
                  <img src={navMenu} alt="슬라이드 메뉴 버튼" />
                </S.HeaderButton>
              </li>
            </S.HeaderList>
          </li>
        </S.HeaderList>
      </S.HearderNav>

      {slide && renderSlideMenu()}
    </>
  );
};

export default memo(Header, isEqual);
