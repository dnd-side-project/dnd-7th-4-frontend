import { RegisterAlarm } from '@Apis/api';
import setAlarmLocationAtom from '@Recoil/setAlarmLocation';
import userAtom from '@Recoil/user';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

// eslint-disable-next-line react/prop-types
const AlarmLocationResult = ({ result }) => {
  const token = useRecoilValue(userAtom).access;
  const [alarm, setAlarm] = useRecoilState(setAlarmLocationAtom);

  useEffect(() => {
    console.log(token);
  }, []);

  const { mutate, error } = useMutation(RegisterAlarm, {
    onSuccess: (data) => {
      const location = `${data.data.data['등록된지역'].city} ${data.data.data['등록된지역'].district}`;
      setAlarm(location);
      window.localStorage.setItem('location', JSON.stringify(location));
    },
  });

  useEffect(() => {
    setAlarm(JSON.parse(window.localStorage.getItem('location')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('location', JSON.stringify(alarm));
  }, [alarm]);

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
  };

  return (
    <div>
      <ul>
        {Object.keys(result).map((item) => (
          <li key={item}>
            <button type="submit" onClick={handleSubmit}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlarmLocationResult;
