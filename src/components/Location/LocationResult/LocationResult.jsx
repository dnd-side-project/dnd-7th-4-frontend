import * as S from '../Location.style';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import locationValueAtom from '@Recoil/location/locationValue';
import locationEditAtom from '@Recoil/location/locationEdit';

const LocationResult = () => {
  const [pinned, setPinned] = useState([]);
  const [places, setPlaces] = useState([]);

  const value = useRecoilValue(locationValueAtom);
  const edit = useRecoilValue(locationEditAtom);

  // PinnedPlaces, SearchPlace 임시 더미 데이터
  useEffect(() => {
    setPinned([
      {
        id: 1,
        name: '서울 마포구',
        temp: 25,
        word: '맑음',
      },
      {
        id: 2,
        name: '서울 강동구',
        temp: 30,
        word: '약한 비',
      },
      {
        id: 3,
        name: '경기도 일산동구',
        temp: 22,
        word: '강한 비',
      },
      {
        id: 4,
        name: '서울시 동작구',
        temp: 31,
        word: '맑음',
      },
    ]);

    setPlaces([
      {
        id: 1,
        name: '서울',
        icon: 'Icon',
        temp: 29,
      },
      {
        id: 2,
        name: '서울, 도봉구',
        icon: 'Icon',
        temp: 31,
      },
      {
        id: 3,
        name: '서울, 동대문구',
        icon: 'Icon',
        temp: 29,
      },
      {
        id: 4,
        name: '서울, 동작구',
        icon: 'Icon',
        temp: 26,
      },
      {
        id: 5,
        name: '서울, 은평구',
        icon: 'Icon',
        temp: 28,
      },
    ]);
  }, []);

  return (
    <>
      <S.LocationResult>
        {!value
          ? // 검색 이전 띄워주는 창 (저장된 장소 리스트)
            pinned.map((place) => (
              <S.LocationPinnedPlace
                key={place.id}
                name={place.name}
                word={place.word}
                temp={place.temp}
                value={value}
                edit={edit}
              >
                <S.LocationPinnedName>{place.name}</S.LocationPinnedName>
                <S.LocationPinnedTemp>{place.temp}</S.LocationPinnedTemp>
                <S.LocationPinnedWord>{place.word}</S.LocationPinnedWord>
              </S.LocationPinnedPlace>
            ))
          : // 장소 검색 결과 띄워주는 창
            places.map((result) => (
              <S.LocationSearchPlace key={result.id} name={result.name} icon={result.icon} temp={result.temp}>
                <S.LocationSearchPlaceName>{result.name}</S.LocationSearchPlaceName>
                <S.LocationSearchPlaceIcon>{result.icon}</S.LocationSearchPlaceIcon>
                <S.LocationSearchPlaceTemp>{result.temp}</S.LocationSearchPlaceTemp>
              </S.LocationSearchPlace>
            ))}
      </S.LocationResult>
    </>
  );
};

export default LocationResult;
