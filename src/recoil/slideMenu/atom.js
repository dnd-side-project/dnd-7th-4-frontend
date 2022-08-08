// CHECK:: Header, slideMenuAtom(아직 미생성) 컴포넌트에서 사용
import { atom } from 'recoil';

const slideMenuAtom = atom({
  key: 'slideMenuAtom',
  default: false,
});

export default slideMenuAtom;
