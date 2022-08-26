import kakaoIcon from '@Assets/icon/kakao-login.png';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';

// import { useNavigate } from 'react-router-dom';
import * as S from './KakaoLoginBtn.style';

const REST_API_KEY = process.env.REACT_APP_KAKAO_APP_KEY;
const REDIRECT_URI = 'http://localhost:3000/account/kakao/oauth';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoLoginBtn = () => {
  // const navigate = useNavigate();

  const handleClick = useCallback(() => {
    window.location.href = `${KAKAO_AUTH_URL}`;
  }, []);
  // <a href={KAKAO_AUTH_URL}></a>
  return (
    <S.KakaoLoginBtn type="button" onClick={handleClick}>
      <img alt="카카오톡 로그인 버튼" src={kakaoIcon} />
    </S.KakaoLoginBtn>
  );
};

export default memo(KakaoLoginBtn, isEqual);
