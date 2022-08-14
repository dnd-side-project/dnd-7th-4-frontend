import * as S from '../Location.style';
import { useRecoilState } from 'recoil';
import locationValueAtom from '@Recoil/location/locationValue';
import locationEditAtom from '@Recoil/location/locationEdit';

const LocationSearch = () => {
  const [value, setValue] = useRecoilState(locationValueAtom);
  const [edit, setEdit] = useRecoilState(locationEditAtom);

  const onSubmit = (e) => {
    e.preventDefault();
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

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
            <S.LocationSearchBtn>icon</S.LocationSearchBtn>
          </S.LocationForm>
        </S.LocationSearchWrapper>
      </S.LocationSearchDiv>
    </>
  );
};

export default LocationSearch;
