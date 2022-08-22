import { memo } from 'react';
import isEqual from 'react-fast-compare';

import KakaoLoginBtn from './KakaoLoginBtn/KakaoLoginBtn';

const KakaoLogin = () => <KakaoLoginBtn />;

export default memo(KakaoLogin, isEqual);
