/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
// import { postLocationData } from '@Apis/api';
import locationEditAtom from '@Recoil/location/locationEdit';
import locationValueAtom from '@Recoil/location/locationValue';
// import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import userAtom from '@Recoil/user';
import { memo, useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from './LocationResult.style';

// 1) 500 에러 해결 ok
// 2) 중복 지역 모달창 표시 ok
// 3) 현재 위치 최상단 고정 ok
// 4) '현재 위치' 컴포넌트 한 박자 늦게 뜨는 거 해결
// 5) api 파일 분리 / 리팩토링
// 6) 유저 인증 (비회원은 시간남으면 구현)

const LocationResult = () => {
  const [modal, setModal] = useState({
    deleteModal: false,
    alertModal: false,
  });
  const [location, setLocation] = useState({
    pinned: [],
    places: [],
  });

  const nowRegion = useRef('');
  const locationRef = useRef({ region: '', keyword: '' });

  const navigate = useNavigate();

  const edit = useRecoilValue(locationEditAtom);
  const [value, setValue] = useRecoilState(locationValueAtom);

  // const accessToken = JSON.parse(window.localStorage.getItem('user')).access;
  const accessToken = JSON.parse(window.localStorage.getItem('user')).access;
  const headers = {
    'Content-Type': `application/json`,
    Authorization: `Bearer ${accessToken}`,
  };

  // 지역 검색 api
  const postLocationData = async () => {
    const res = await axios.post(
      `https://weathertogo.shop/search`,
      {
        data: value,
      },
      [value],
    );
    setLocation((prevState) => ({ ...prevState, places: Object.entries(res.data.data) }));
  };

  // 지역 등록 확인 api
  const getLocationPinnedList = async () => {
    const res = await axios.get(`https://weathertogo.shop/account/myregions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setLocation((prevState) => ({ ...prevState, pinned: Object.values(res.data.data) }));
  };

  // 지역 등록 api
  const postLocationPinned = async () => {
    const keywordArr = locationRef.current.keyword.split(' ');
    const city = keywordArr[0];
    const district = keywordArr[1];

    try {
      const res = await axios.post(`https://weathertogo.shop/account/region`, JSON.stringify({ city, district }), {
        headers,
      });
      getLocationPinnedList();
      setValue('');
    } catch {
      setModal((prevModal) => ({ ...prevModal, alertModal: true }));
    }
  };

  // 현재 위치 설정 (위경도 -> 주소 변환)
  const postFindRegion = async () => {
    const longitude = JSON.parse(window.localStorage.getItem('location')).lon;
    const latitude = JSON.parse(window.localStorage.getItem('location')).lat;

    const res1 = await axios.post(`https://weathertogo.shop/find/region`, JSON.stringify({ longitude, latitude }), {
      headers,
    });
    if (res1.data) {
      nowRegion.current = `${res1.data.data.city} ${res1.data.data.distinct.replace(' ', '')}`;
    } else {
      nowRegion.current = `서울특별시 광진구`;
    }

    const res2 = await axios.post(
      `https://weathertogo.shop/account/region`,
      JSON.stringify({ city: nowRegion.current.split(' ')[0], district: nowRegion.current.split(' ')[1] }),
      {
        headers,
      },
    );

    getLocationPinnedList();
  };

  // 지역 삭제 api
  const deleteLocationPinned = async () => {
    const regionArr = locationRef.current.region.split(' ');
    const city = regionArr[0];
    const district = regionArr[1];
    setModal((prevModal) => ({ ...prevModal, deleteModal: false }));
    const res = await axios.delete(`https://weathertogo.shop/account/region?city=${city}&district=${district}`, {
      headers,
    });
    getLocationPinnedList();
  };

  // 클릭한 지역의 날씨 정보 (메인) 요청
  const getRegionMain = () => {
    if (!edit) {
      window.localStorage.setItem('region', locationRef.current.region);
      navigate('/main');
    }
  };

  useEffect(() => {
    postLocationData();
  }, [value]);

  useEffect(() => {
    getLocationPinnedList();
  }, [locationRef.current.keyword]);

  useEffect(() => {
    // 위경도 얻어내기
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      window.localStorage.setItem('location', JSON.stringify({ lon, lat }));
      postFindRegion();
    });
  }, []);

  return (
    <>
      <S.LocationModalWrapper modal={modal.deleteModal}>
        {modal.deleteModal ? (
          <S.LocationModal modal={modal.deleteModal}>
            <S.LocationModalQuestion region={locationRef.current.region}>
              `{locationRef.current.region}`를 삭제하시겠습니까?
            </S.LocationModalQuestion>
            <S.LocationModalCancel onClick={() => setModal((prevModal) => ({ ...prevModal, deleteModal: false }))}>
              취소
            </S.LocationModalCancel>
            <S.LocationModalDelete onClick={deleteLocationPinned}>삭제</S.LocationModalDelete>
          </S.LocationModal>
        ) : null}
      </S.LocationModalWrapper>

      <S.LocationModalWrapper modal={modal.alertModal}>
        {modal.alertModal ? (
          <S.LocationModal modal={modal.alertModal}>
            <S.LocationModalQuestion alert={alert}>이미 등록된 지역입니다.</S.LocationModalQuestion>
            <S.LocationModalCancel
              alert={alert}
              onClick={() => setModal((prevModal) => ({ ...prevModal, alertModal: false }))}
            >
              확인
            </S.LocationModalCancel>
          </S.LocationModal>
        ) : null}
      </S.LocationModalWrapper>
      <S.LocationResult modal={modal}>
        {!value
          ? // 검색 이전 띄워주는 창 (저장된 장소 리스트)
            location.pinned.map((place, index) =>
              place.지역 === `${nowRegion.current}` ? (
                <S.LocationPinnedNowPlace
                  alt="현재 위치 날씨 이미지"
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  src={place.이미지url}
                  onClick={() => {
                    locationRef.current.region = place.지역;
                    getRegionMain();
                  }}
                >
                  <S.LocationNowRegion>현재 위치</S.LocationNowRegion>
                  <S.LocationPinnedName>{nowRegion.current}</S.LocationPinnedName>
                  <S.LocationPinnedTemp>{place.현재기온.split('.')[0]}</S.LocationPinnedTemp>
                </S.LocationPinnedNowPlace>
              ) : (
                <S.LocationPinnedPlace
                  onClick={() => {
                    locationRef.current.region = place.지역;
                    getRegionMain();
                  }}
                  alt="등록된 지역 날씨 이미지"
                  edit={edit}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  src={place.이미지url}
                >
                  <S.LocationPinnedName showDeleteIcon={edit && locationRef.current.region === place.지역}>
                    {place.지역}
                  </S.LocationPinnedName>
                  <S.LocationPinnedTemp>{place.현재기온.split('.')[0]}</S.LocationPinnedTemp>
                  {edit ? (
                    <S.LocationDeleteIcon
                      edit={edit}
                      onClick={() => setModal((prevModal) => ({ ...prevModal, deleteModal: true }))}
                    />
                  ) : null}
                </S.LocationPinnedPlace>
              ),
            )
          : // 장소 검색 결과 띄워주는 창
            location.places.map((place, index) => (
              <S.LocationSearchPlace
                onClick={() => {
                  // eslint-disable-next-line prefer-destructuring
                  locationRef.current.keyword = place[0];
                  postLocationPinned();
                }}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <S.LocationSearchPlaceName>{place[0]}</S.LocationSearchPlaceName>
                <S.LocationSearchPlaceIcon src={place[1].이미지url} />
                <S.LocationSearchPlaceTemp>{place[1].기온}</S.LocationSearchPlaceTemp>
              </S.LocationSearchPlace>
            ))}
      </S.LocationResult>
    </>
  );
};
export default memo(LocationResult, isEqual);
