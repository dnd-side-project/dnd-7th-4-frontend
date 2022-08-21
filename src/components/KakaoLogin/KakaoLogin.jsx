import { memo } from 'react';
import isEqual from 'react-fast-compare';

import KakaoLoginAuth from './KakaoLoginAuth/KakaoLoginAuth';
import KakaoLoginBtn from './KakaoLoginBtn/KakaoLoginBtn';

const KakaoLogin = () => (
  <>
    <KakaoLoginBtn />
    <KakaoLoginAuth />
  </>
);

export default memo(KakaoLogin, isEqual);
