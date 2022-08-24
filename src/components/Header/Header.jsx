/* eslint-disable jsx-a11y/alt-text */
import kakaotalk from '@Assets/icon/kakao.svg';
import menu from '@Assets/icon/menu-white.svg';
import share from '@Assets/icon/share-white.svg';
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
    <S.Header>
      <nav>
        <S.List>
          <S.Title>
            <Link to="/location">위치 페이지</Link>
          </S.Title>
          <li>
            <S.List sub>
              <S.Item>
                <Link to="/example">
                  <S.Img src={share} alt="공유 페이지" />
                </Link>
              </S.Item>
              <S.Item noshadow>
                <Link to="/alarm">
                  <S.Img src={kakaotalk} alt="알림 페이지" kakao />
                </Link>
              </S.Item>
              <S.Item>
                <S.Button onClick={() => setSlide(true)}>
                  <S.Img src={menu} alt="슬라이드 메뉴 버튼" />
                </S.Button>
              </S.Item>
            </S.List>
          </li>
        </S.List>
      </nav>

      {slide && renderSlideMenu()}
    </S.Header>
  );
};

export default memo(Header, isEqual);
