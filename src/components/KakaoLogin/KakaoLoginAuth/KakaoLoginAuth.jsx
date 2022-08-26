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
            // eslint-disable-next-line camelcase
            profile_img,
            django_token: { access, refresh },
          } = response.data;
          // eslint-disable-next-line camelcase
          setUser(() => ({ nickname, profile_img, access, refresh, alarm: true, login: true }));
          // eslint-disable-next-line camelcase
          window.localStorage.setItem(
            'user',
            // eslint-disable-next-line camelcase
            JSON.stringify({ nickname, profile_img, access, refresh, alarm: true, login: true }),
          );
        });
        navigate('/main');
      } catch (e) {
        //
      }
    })();
  }, []);
  return null;
};
export default KakaoLoginAuth;
