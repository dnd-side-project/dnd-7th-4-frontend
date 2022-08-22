import { selector } from 'recoil';

import tabMenuAtom from '../tabMenu';
import weatherAtom from './atom';

const skyWithSelect = selector({
  key: 'skyWithSelect',
  get: ({ get }) => {
    const tabMenuName = get(tabMenuAtom);
    let skyState = get(weatherAtom)?.data?.오늘?.현재?.하늘상태;
    switch (tabMenuName) {
      case '오늘':
        skyState = get(weatherAtom)?.data?.오늘?.현재?.하늘상태;
        break;
      case '내일':
        skyState = get(weatherAtom)?.data?.내일?.현재?.하늘상태;
        break;
      case '이번주':
        skyState = '맑음';
        break;
      default:
    }
    return skyState;
  },
});

export default skyWithSelect;
