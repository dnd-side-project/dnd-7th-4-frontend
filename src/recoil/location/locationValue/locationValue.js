import { atom } from 'recoil';

const locationValueAtom = atom({
  key: 'value',
  default: '',
});

export default locationValueAtom;
