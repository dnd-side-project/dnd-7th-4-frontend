import { memo } from 'react';
import isEqual from 'react-fast-compare';

import * as S from './Location.style';
import LocationResult from './LocationResult/LocationResult';
import LocationSearch from './LocationSearch/LocationSearch';

const Location = () => (
  <S.LocationWrapper>
    <LocationSearch />
    <LocationResult />
  </S.LocationWrapper>
);

export default memo(Location, isEqual);
