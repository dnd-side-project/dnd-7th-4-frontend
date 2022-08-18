import tabMenuAtom from '@Recoil/tabMenu';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilState } from 'recoil';

import * as S from './ForecastTab.style';

const ForecastTab = () => {
  const [active, setActive] = useRecoilState(tabMenuAtom);
  const content = ['오늘', '내일', '이번주'];

  return (
    <S.ForecastTabList>
      {content.map((item) => (
        // CHECK:: content 배열의 요소들이 변경되거나 재배치될 일이 없기 때문에 index를 key값으로 사용했다. 옳은 선택인지?
        // eslint-disable-next-line react/no-array-index-key
        <li key={item}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className={active === item ? 'on' : null} onClick={() => setActive(item)}>
            {item}
          </button>
        </li>
      ))}
    </S.ForecastTabList>
  );
};

export default memo(ForecastTab, isEqual);
