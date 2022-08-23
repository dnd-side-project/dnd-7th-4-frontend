import { atom } from 'recoil';

const errorAtom = atom({
  key: 'errorAtom',
  default: '404',
});

export default errorAtom;
