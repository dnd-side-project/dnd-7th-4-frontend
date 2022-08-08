import { atom } from 'recoil';

export const locationValueAtom = atom({
  key: 'value',
  default: '',
});

export const locationEditAtom = atom({
  key: 'edit',
  default: false,
});

export default locationValueAtom;
