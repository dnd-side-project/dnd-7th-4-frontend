import { RegisterAlarm } from '@Apis/api';
import setAlarmLocationAtom from '@Recoil/setAlarmLocation';
import userAtom from '@Recoil/user';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from './AlarmLocationResult.style';

// eslint-disable-next-line react/prop-types
const AlarmLocationResult = ({ result }) => {
  const navigate = useNavigate();

  const token = useRecoilValue(userAtom).access;
  const [alarmLocation, setalarmLocation] = useRecoilState(setAlarmLocationAtom);

  useEffect(() => {
    console.log(token);
  }, []);

  const { mutate, error } = useMutation(RegisterAlarm, {
    onSuccess: (data) => {
      const location = `${data.data.data['등록된지역'].city} ${data.data.data['등록된지역'].district}`;
      setalarmLocation(location);
      window.localStorage.setItem('alarmLocation', JSON.stringify(location));
    },
  });

  useEffect(() => {
    setalarmLocation(JSON.parse(window.localStorage.getItem('alarmLocation')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('alarmLocation', JSON.stringify(alarmLocation));
  }, [alarmLocation]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      keyword: {
        city: e.target.textContent.split(' ')[0],
        district: e.target.textContent.split(' ')[1],
      },
      token,
    };
    // console.log(keyward);
    // console.log(token);
    mutate(data);
    navigate(-1);
  };

  return (
    <S.List>
      {Object.keys(result).map((item) => (
        <li key={item}>
          <S.Button type="submit" onClick={handleSubmit}>
            {item}
          </S.Button>
        </li>
      ))}
    </S.List>
  );
};

export default AlarmLocationResult;
