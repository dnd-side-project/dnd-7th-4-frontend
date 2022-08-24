import { getLocation } from '@Apis/api';
import alarmLocationAtom from '@Recoil/alarmLocation';
import { useMutation } from '@tanstack/react-query';
import { memo, useCallback, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import AlarmLocationResult from '../AlarmLocationResult';

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
    <>
      <header>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <p>위치 설정</p>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="어떤 어떤 지역의 날씨로 알림을 받을까요?"
          onChange={onChange}
          value={value.data}
        />
        {/* eslint-disable-next-line react/button-has-type */}
      </form>
      <AlarmLocationResult result={result} />
    </>
  );
};

export default memo(AlarmLocation, isEqual);
