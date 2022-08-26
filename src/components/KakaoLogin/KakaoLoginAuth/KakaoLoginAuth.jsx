import userAtom from '@Recoil/user';
import axios from 'axios';
import { memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const KakaoLoginAuth = () => {
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const getKakao = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const response = await axios.get(`https://weathertogo.shop/account/kakao/oauth?code=${code}`);
    if (response) {
      const {
        nickname,
        // eslint-disable-next-line camelcase
        profile_img,
        django_token: { access, refresh },
      } = response.data.data;
      // eslint-disable-next-line camelcase
      setUser(() => ({ nickname, profile_img, access, refresh, alarm: true, login: true }));
      // eslint-disable-next-line camelcase
      window.localStorage.setItem(
        'user',
        // eslint-disable-next-line camelcase
        JSON.stringify({ nickname, profile_img, access, refresh, alarm: true, login: true }),
      );
      navigate('/main');
    }
  };

  useEffect(() => {
    getKakao();
  }, []);
};

export default memo(KakaoLoginAuth, isEqual);
