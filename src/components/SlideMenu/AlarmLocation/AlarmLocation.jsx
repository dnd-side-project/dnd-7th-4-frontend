import { getLocation } from '@Apis/api';
import Background from '@Components/Background';
import alarmLocationListAtom from '@Recoil/alarmLocationList';
import alarmLocationValueAtom from '@Recoil/alarmLocationValue';
import { useMutation } from '@tanstack/react-query';
import { memo, useCallback, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import AlarmLocationResult from '../AlarmLocationResult';
import * as S from './AlarmLocation.style';

const AlarmLocation = () => {
  const navigate = useNavigate();
  const [value, setValue] = useRecoilState(alarmLocationValueAtom);
  const setList = useSetRecoilState(alarmLocationListAtom);

  useEffect(() => {
    setValue({ data: '' });
    setList({});
  }, []);

  const onChange = useCallback(
    (e) => {
      setValue({ data: e.target.value });
      setList({});
    },
    [value],
  );

  const { mutate, error } = useMutation(getLocation, {
    onSuccess: (data) => {
      setList(data.data.data);
      console.log(data.data.data);
    },
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(JSON.stringify(value));
  };

  return (
    <Background>
      <S.Section>
        <S.Header>
          {/* eslint-disable-next-line react/button-has-type */}
          <S.BackBtn onClick={() => navigate(-1)} />
          <p>위치 설정</p>
        </S.Header>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="어떤 지역의 날씨로 알림을 받을까요?"
            onChange={onChange}
            value={value.data}
          />
          {/* eslint-disable-next-line react/button-has-type */}
        </S.Form>
        <AlarmLocationResult />
      </S.Section>
    </Background>
  );
};

export default memo(AlarmLocation, isEqual);
