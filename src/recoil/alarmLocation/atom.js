import { atom } from 'recoil';

const alarmLocationAtom = atom({
  key: 'alarmLocationAtom',
  default: {
    data: '',
  },
});

export default alarmLocationAtom;
