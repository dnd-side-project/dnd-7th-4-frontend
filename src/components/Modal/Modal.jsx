import { memo } from 'react';
import isEqual from 'react-fast-compare';

import * as S from './Modal.style';

// eslint-disable-next-line react/prop-types
const Modal = ({ setModal }) => (
  <S.Background>
    <S.Modal>
      <p>이미 등록된 지역입니다.</p>
      <S.Button onClick={() => setModal(false)}>확인</S.Button>
    </S.Modal>
  </S.Background>
);

export default memo(Modal, isEqual);
