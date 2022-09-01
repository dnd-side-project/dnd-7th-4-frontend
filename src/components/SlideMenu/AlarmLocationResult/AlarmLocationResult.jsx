import { RegisterAlarm } from '@Apis/api';
import alarmLocationAtom from '@Recoil/alarmLocation';
import alarmLocationListAtom from '@Recoil/alarmLocationList';
import alarmLocationValueAtom from '@Recoil/alarmLocationValue';
import userAtom from '@Recoil/user';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './AlarmLocationResult.style';

// eslint-disable-next-line react/prop-types
const AlarmLocationResult = () => {
  const token = useRecoilValue(userAtom).access;
  const [alarmLocation, setAlarmLocation] = useRecoilState(alarmLocationAtom);
  const setValue = useSetRecoilState(alarmLocationValueAtom);
  const [list, setList] = useRecoilState(alarmLocationListAtom);
  const navigate = useNavigate();

  useEffect(() => {
    setAlarmLocation(JSON.parse(window.localStorage.getItem('alarmLocation')));
  }, [alarmLocation]);

  useEffect(() => {
    window.localStorage.setItem('alarmLocation', JSON.stringify(alarmLocation));
  }, [alarmLocation]);

  const { mutate } = useMutation(RegisterAlarm, {
    onSuccess: (data) => {
      const location = `${data.data.data['등록된지역'].city} ${data.data.data['등록된지역'].district}`;
      setAlarmLocation(location);
      window.localStorage.setItem('alarmLocation', JSON.stringify(location));
      navigate('/main');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.textContent === alarmLocation) {
      alert('이미 등록된 지역입니다.');
      setValue({ data: '' });
      setList({});
    } else {
      const data = {
        keyword: {
          city: e.target.textContent.split(' ')[0],
          district: e.target.textContent.split(' ')[1],
        },
        token,
      };
      mutate(data);
    }
  };

  return (
    <S.List>
      {Object.keys(list).map((item) => (
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
