import * as S from './Location.style';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import LocationSearch from './LocationSearch/LocationSearch';
import LocationResult from './LocationResult/LocationResult';

const Location = () => {
  return (
    <S.LocationWrapper>
      <LocationSearch></LocationSearch>
      <LocationResult></LocationResult>
    </S.LocationWrapper>
  );
};

export default memo(Location, isEqual);
