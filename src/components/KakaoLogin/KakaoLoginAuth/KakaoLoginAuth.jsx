import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoLoginAuth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://weathertogo.shop/account/kakao/oauth?code=${code}`).then((response) => {
          const djangoToken = response.data.django_token.access;
          const refreshToken = response.data.django_token.refresh;
          const { nickname } = response.data;
          window.localStorage.setItem('access', djangoToken);
          window.localStorage.setItem('refresh', refreshToken);
          window.localStorage.setItem('nickname', nickname);
        });
        navigate('/alarm');
      } catch (e) {
        //
      }
    })();
  }, []);
  const nickname = window.localStorage.getItem('nickname');
  return nickname;
};
export default KakaoLoginAuth;
