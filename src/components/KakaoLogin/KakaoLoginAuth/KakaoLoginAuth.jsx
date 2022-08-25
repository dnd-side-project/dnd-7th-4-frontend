import userAtom from '@Recoil/user';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const KakaoLoginAuth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://weathertogo.shop/account/kakao/oauth?code=${code}`).then((response) => {
          const {
            nickname,
            django_token: { access, refresh },
          } = response.data;
          setUser(() => ({ nickname, access, refresh, alarm: true, login: true }));
          window.localStorage.setItem('user', JSON.stringify({ nickname, access, refresh, alarm: true, login: true }));
        });
        navigate('/');
      } catch (e) {
        //
      }
    })();
  }, []);
  return null;
};
export default KakaoLoginAuth;
