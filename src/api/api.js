/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */
import axios from 'axios';

const BASE_URL = 'https://weathertogo.shop';

// eslint-disable-next-line consistent-return
const getData = async (location) => {
  // console.log(location);
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

// Authorization: `Bearer ${accessToken}`,
const postFindRegion = async ({ lon: longitude, lat: latitude }) => {
  console.log(longitude, latitude);
  const res = await axios.post(`${BASE_URL}/find/region`, JSON.stringify({ longitude, latitude }), {
    headers: {
      'Content-Type': `application/json`,
    },
  });
  return res;
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
  return await axios.post(`${BASE_URL}/account/alarm/region`, JSON.stringify(data.keyword), {
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
  });
};

export { getData, getLocation, getLocationData, postFindRegion, postSetAlarm, RegisterAlarm };
