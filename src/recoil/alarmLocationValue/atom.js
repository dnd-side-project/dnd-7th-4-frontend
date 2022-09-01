import { atom } from 'recoil';

const alarmLocationValueAtom = atom({
  key: 'alarmLocationValueAtom',
  default: {
    data: '',
  },
});

export default alarmLocationValueAtom;
