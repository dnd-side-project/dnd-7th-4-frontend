// import * as S from './Tomorrow.style';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

// CHECK:: 추후에 api 전달받으면 TodayForecast와 Tomorrow 분리하지 않고 한 컴포넌트 내에서 오늘, 내일 구분해서 렌더하기
const Tomorrow = () => {
  return (
    <>
      <h1>내일 날씨 렌더</h1>
    </>
  );
};

export default memo(Tomorrow, isEqual);
