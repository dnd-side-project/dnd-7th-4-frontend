import tabMenuAtom from '@Recoil/tabMenu';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilState } from 'recoil';

import * as S from './ForecastTab.style';

const ForecastTab = () => {
  const [active, setActive] = useRecoilState(tabMenuAtom);
  const content = ['오늘', '내일', '이번주'];

  return (
    <S.TabList>
      {content.map((item) => (
        <li key={item}>
          <S.Tab className={active === item ? 'on' : null} onClick={() => setActive(item)}>
            {item}
          </S.Tab>
        </li>
      ))}
    </S.TabList>
  );
};

export default memo(ForecastTab, isEqual);
