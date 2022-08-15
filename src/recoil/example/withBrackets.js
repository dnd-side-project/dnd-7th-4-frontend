import { selector } from 'recoil';

import exampleAtom from './atom';

const exampleWithBrackets = selector({
  key: 'exampleWithBrackets',
  get: ({ get }) => `Adding brackets: [${get(exampleAtom).value}]`,
  set: ({ set }, newValue) => {
    set(exampleAtom, newValue);
  },
});

export default exampleWithBrackets;
