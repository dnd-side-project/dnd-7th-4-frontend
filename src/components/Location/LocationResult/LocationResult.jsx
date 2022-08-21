import { getLocationData } from '@Apis/api';
import locationEditAtom from '@Recoil/location/locationEdit';
import locationValueAtom from '@Recoil/location/locationValue';
import { useQuery } from '@tanstack/react-query';
import { memo, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';

// import { ReactComponent as deleteIcon } from '../../../assets/icon/delete.svg';
import * as S from './LocationResult.style';

const LocationResult = () => {
  const [pinned, setPinned] = useState([]);
  const [places, setPlaces] = useState([]);
  const [modal, setModal] = useState(false);
  const [region, setRegion] = useState('');

  const value = useRecoilValue(locationValueAtom);
  const edit = useRecoilValue(locationEditAtom);

  const { isLoading, data } = useQuery(['weather'], () => getLocationData({ city: '서울특별시', district: '종로구' }));

  const DeleteRegion = () => {
    setModal(false);
  };
  useEffect(() => {
    if (!isLoading) {
      setPlaces(data);
    }
  }, [isLoading, data]);

  // PinnedPlaces, SearchPlace 임시 더미 데이터
  useEffect(() => {
    setPinned([
      {
        id: 1,
        name: '서울시 마포구',
        temp: 25,
        word: '맑음',
      },
      {
        id: 2,
        name: '경기도 일산동구',
        temp: 25,
        word: '맑음',
      },
    ]);
  }, []);

  return (
    <>
      <S.LocationModalWrapper modal={modal}>
        {modal ? (
          <S.LocationModal modal={modal}>
            <S.LocationModalQuestion>`{region}`를 삭제하시겠습니까?</S.LocationModalQuestion>
            <S.LocationModalCancel onClick={() => setModal(false)}>취소</S.LocationModalCancel>
            <S.LocationModalDelete onClick={DeleteRegion}>삭제</S.LocationModalDelete>
          </S.LocationModal>
        ) : null}
      </S.LocationModalWrapper>
      <S.LocationResult modal={modal}>
        {!value
          ? // 검색 이전 띄워주는 창 (저장된 장소 리스트)
            pinned.map((place) => (
              <S.LocationPinnedPlace onClick={() => setRegion(place.name)} key={place.id} value={value}>
                <S.LocationPinnedName showDeleteIcon={edit && region === place.name} edit={edit}>
                  {place.name}
                </S.LocationPinnedName>
                <S.LocationPinnedTemp>{place.temp}</S.LocationPinnedTemp>
                {edit && region === place.name ? (
                  <S.LocationDeleteIcon modal={modal} onClick={() => setModal(true)} />
                ) : null}
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

export default memo(LocationResult, isEqual);
