import axios from 'axios';

const BASE_URL = 'https://weathertogo.shop';

// eslint-disable-next-line consistent-return
const getData = async (location) => {
  const res = await axios.get(`${BASE_URL}/main`, {
    params: location,
  });
  return res.data;
};

export { getData };
