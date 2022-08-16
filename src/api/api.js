/* eslint-disable consistent-return */
import axios from 'axios';

// const BASE_URL = 'https://weathertogo.shop';
const TEST_URL = 'https://reqres.in';

const fetchTestInfo = async () => {
  try {
    const response = await axios.get(`${TEST_URL}/api/users/2`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error);
  }
};

export { fetchTestInfo };
