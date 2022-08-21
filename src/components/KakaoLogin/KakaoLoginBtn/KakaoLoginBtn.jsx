import kakaoIcon from '@Assets/icon/kakao-login.png';

import * as S from './KakaoLoginBtn.style';

const KakaoLoginBtn = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_APP_KEY;
  const REDIRECT_URI = 'https://weathertogo.shop/account/kakao/oauth';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <a href={KAKAO_AUTH_URL}>
      <S.KakaoLoginBtn type="submit">
        <img alt="카카오톡 로그인 버튼" src={kakaoIcon} />
      </S.KakaoLoginBtn>
    </a>
  );
};

export default KakaoLoginBtn;
