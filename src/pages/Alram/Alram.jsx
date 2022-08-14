import * as S from './Alram.style';
import exit from '@Assets/exit-button.svg';
import alram from '@Assets/alarm.svg';
// import check from '@Assets/check-circle.svg';
// import social from "@Assets/social.svg"

// 유저의 로그인 상태, 카카오톡 알림 설정 유무에 따라 Alram 화면이 변화한다.
const Alram = () => {
  return (
    <>
      <S.Container>
        <header>
          <img src={exit} />
        </header>
        <main>
          <S.Wrapper>
            <img src={alram} />
            <S.Title>
              <span>카톡으로 간편하게</span>
              <span>날씨 정보를 받아보세요</span>
            </S.Title>
            <S.Text>
              <span>아침에는 당일 날씨를, 저녁에는</span>
              <span>내일 날씨를 카톡으로 보내드려요!</span>
            </S.Text>
            <S.Button>카톡알림 받아보기</S.Button>
          </S.Wrapper>
        </main>
      </S.Container>
    </>
  );
};

export default Alram;
