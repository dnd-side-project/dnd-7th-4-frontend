import tabMenuAtom from '@Recoil/tabMenu';
import { useSetRecoilState } from 'recoil';

import * as S from './ForecastTab.style';

const ForecastTab = () => {
  const setActive = useSetRecoilState(tabMenuAtom);

  return (
    <S.ForecastTabList>
      <li>
        <button type="submit" onClick={() => setActive(0)}>
          오늘
        </button>
      </li>
      <li>
        <button type="submit" onClick={() => setActive(1)}>
          내일
        </button>
      </li>
      <li>
        <button type="submit" onClick={() => setActive(2)}>
          이번주
        </button>
      </li>
    </S.ForecastTabList>
  );
};

export default ForecastTab;
