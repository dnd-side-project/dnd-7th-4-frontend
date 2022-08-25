import { getLocation } from '@Apis/api';
import Background from '@Components/Background';
import alarmLocationAtom from '@Recoil/alarmLocation';
import { useMutation } from '@tanstack/react-query';
import { memo, useCallback, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import AlarmLocationResult from '../AlarmLocationResult';
import * as S from './AlarmLocation.style';

const AlarmLocation = () => {
  const navigate = useNavigate();
  const [value, setValue] = useRecoilState(alarmLocationAtom);
  const [result, setResult] = useState({});

  const onChange = useCallback(
    (e) => {
      setValue({ data: e.target.value });
      setResult({});
    },
    [value],
  );

  // useEffect(() => {
  //   console.log(JSON.stringify(value));
  // }, [value]);

  const { mutate, error } = useMutation(getLocation, {
    onSuccess: (data) => {
      setResult(data.data.data);
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
        <AlarmLocationResult result={result} />
      </S.Section>
    </Background>
  );
};

export default memo(AlarmLocation, isEqual);
