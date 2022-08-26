/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */
import axios from 'axios';

const BASE_URL = 'https://weathertogo.shop';

// eslint-disable-next-line consistent-return
const getData = async (location) => {
  const res = await axios.get(`${BASE_URL}/main`, {
    params: location,
  });
  return res.data;
};

// 임시 작성
const getLocationData = async (keyword) => {
  const res = await axios.get(`${BASE_URL}/search`, {
    params: keyword,
  });
  // ex) Object.values(response.data.data)[0].하늘상태
  return res.data;
};

const postSetAlarm = async (token) => {
  return await axios.post(`${BASE_URL}/account/alarm`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getLocation = async (keyword) => {
  return await axios.post(`${BASE_URL}/search`, keyword, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const RegisterAlarm = async (data) => {
  console.log(data.keyword, data.token);
  return await axios.post(`${BASE_URL}/account/alarm/region`, JSON.stringify(data.keyword), {
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
  });
};

export { getData, getLocation, getLocationData, postSetAlarm, RegisterAlarm };
