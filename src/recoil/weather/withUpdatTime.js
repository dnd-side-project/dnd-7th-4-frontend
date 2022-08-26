import { selector } from 'recoil';

import weatherAtom from './atom';

const weatherWithUpdateTime = selector({
  key: 'weatherWithUpdateTime',
  get: ({ get }) => {
    const time = get(weatherAtom)?.data ? get(weatherAtom)?.data['업데이트 시간'] : '0000';
    const hour = +time.slice(0, 2);
    if (hour >= 12) {
      return `오후 ${hour - 12}시`;
    }
    return `오전 ${hour}시`;
  },
});

export default weatherWithUpdateTime;
