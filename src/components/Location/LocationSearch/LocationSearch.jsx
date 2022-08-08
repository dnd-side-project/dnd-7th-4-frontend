import * as S from '../Location.style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import locationValueAtom from '@Recoil/location';
import locationEditAtom from '@Recoil/location';

const LocationSearch = () => {
  const value = useRecoilValue(locationValueAtom);
  const setValue = useSetRecoilState(locationValueAtom);
  const edit = useRecoilValue(locationEditAtom);
  const setEdit = useSetRecoilState(locationEditAtom);

  const onSubmit = (e) => {
    e.preventDefault();
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // 버튼 클릭하면 인풋값에 edit 이 들어감 -> 해결해야 함!!
  const onClickEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  return (
    <>
      <S.LocationHeader>
        <S.LocationTitle>{value ? `지역 추가` : `지역 리스트`}</S.LocationTitle>
        <S.LocationEditBtn onClick={onClickEdit}>{!edit ? `편집` : `완료`}</S.LocationEditBtn>
      </S.LocationHeader>
      <S.LocationSearchDiv>
        <S.LocationSearchWrapper>
          <S.LocationForm onSubmit={onSubmit}>
            <S.LocationInput onChange={onChange} value={value} />
            <S.LocationSearchBtn>
              <BiSearchAlt2 />
            </S.LocationSearchBtn>
          </S.LocationForm>
        </S.LocationSearchWrapper>
      </S.LocationSearchDiv>
    </>
  );
};

export default LocationSearch;
