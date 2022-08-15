import * as S from './ForecastTab.style';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useSetRecoilState } from 'recoil';
import tabMenuAtom from '@Recoil/tabMenu';

const ForecastTab = () => {
  const setActive = useSetRecoilState(tabMenuAtom);

  return (
    <S.ForecastTabList>
      <li>
        <button onClick={() => setActive(0)}>오늘</button>
      </li>
      <li>
        <button onClick={() => setActive(1)}>내일</button>
      </li>
      <li>
        <button onClick={() => setActive(2)}>이번주</button>
      </li>
    </S.ForecastTabList>
  );
};

export default memo(ForecastTab, isEqual);
