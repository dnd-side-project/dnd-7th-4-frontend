import { atom } from 'recoil';

const locationEditAtom = atom({
  key: 'edit',
  default: false,
});

export default locationEditAtom;
