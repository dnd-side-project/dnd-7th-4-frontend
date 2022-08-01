import { selector } from 'recoil';
import exampleAtom from './atom';

const exampleWithParens = selector({
  key: 'exampleWithParens',
  get: ({ get }) => `Adding parens: (${get(exampleAtom).value})`,
  set: ({ set }, newValue) => {
    set(exampleAtom, newValue);
  },
});

export default exampleWithParens;
