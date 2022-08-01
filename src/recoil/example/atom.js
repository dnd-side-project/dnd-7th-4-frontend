import { atom } from 'recoil';

const exampleAtom = atom({
  key: 'exampleAtom',
  default: {
    name: 'example',
    value: 'Welcome DND 7th 4 Front Repo!',
  },
});

export default exampleAtom;
