import * as S from './Header.style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import alarm from '@Assets/alarm.png';
import share from '@Assets/share.png';
import navMenu from '@Assets/nav-menu.png';
import slideMenuAtom from '@Recoil/slideMenu';

const Header = () => {
  // CHECK:: slide의 상태를 참조해서 슬라이드 메뉴를 렌더할 예정이라 useRecoilState 사용
  const [slide, setSlide] = useRecoilState(slideMenuAtom);

  // CHECK:: 위치, 알림, 공유 페이지는 아직 작업 전이라 임의로 /example 연결해둠
  return (
    <>
      <S.HearderNav>
        <S.HeaderList>
          <li>
            <Link to={'/Location'}>위치 페이지</Link>
          </li>
          <li>
            <S.HeaderList sub>
              <li>
                <Link to={'/example'}>
                  <img src={alarm} alt="알림 페이지" />
                </Link>
              </li>
              <li>
                <Link to={'/example'}>
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

      {/* CHECK:: slideMenuAtom 작업 전이라 임의로 텍스트 렌더함 */}
      {slide == true && <p>슬라이드 컴포넌트 렌더 예정</p>}
    </>
  );
};

export default Header;
