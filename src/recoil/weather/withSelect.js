import { selector } from 'recoil';

import tabMenuAtom from '../tabMenu';
import weatherAtom from './atom';

const weatherWithSelect = selector({
  key: 'weatherWithSelect',
  get: ({ get }) => {
    const tabMenuName = get(tabMenuAtom);
    let weather = get(weatherAtom)?.data?.오늘;
    switch (tabMenuName) {
      case '오늘':
        weather = get(weatherAtom)?.data?.오늘;
        break;
      case '내일':
        weather = get(weatherAtom)?.data?.내일;
        break;
      case '이번주':
        weather = get(weatherAtom)?.data?.이번주;
        break;
      default:
    }
    return weather;
  },
});

export default weatherWithSelect;
