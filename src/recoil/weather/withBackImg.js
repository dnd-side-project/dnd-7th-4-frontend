import { selector } from 'recoil';

import tabMenuAtom from '../tabMenu';
import weatherAtom from './atom';

const weatherWithBackImg = selector({
  key: 'weatherWithBackImg',
  get: ({ get }) => {
    const tabMenuName = get(tabMenuAtom);
    let backImg = get(weatherAtom)?.data?.오늘?.배경이미지;
    switch (tabMenuName) {
      case '오늘':
        backImg = get(weatherAtom)?.data?.오늘?.배경이미지;
        break;
      case '내일':
        backImg = get(weatherAtom)?.data?.내일?.배경이미지;
        break;
      case '이번주':
        backImg = '이번주';
        break;
      default:
    }
    return backImg;
  },
});

export default weatherWithBackImg;
