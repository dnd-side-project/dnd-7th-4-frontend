import * as S from './Location.style';
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

export default Location;
