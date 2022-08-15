import * as S from './ForecastTab.style';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilState } from 'recoil';
import tabMenuAtom from '@Recoil/tabMenu';

const ForecastTab = () => {
  const [active, setActive] = useRecoilState(tabMenuAtom);
  const content = ['오늘', '내일', '이번주'];

  return (
    <S.ForecastTabList>
      {content.map((item, idx) => (
        // CHECK:: content 배열의 요소들이 변경되거나 재배치될 일이 없기 때문에 index를 key값으로 사용했다. 옳은 선택인지?
        <li key={idx}>
          <button className={active === idx ? 'on' : null} onClick={() => setActive(idx)}>
            {item}
          </button>
        </li>
      ))}
    </S.ForecastTabList>
  );
};

export default memo(ForecastTab, isEqual);
