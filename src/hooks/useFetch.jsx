import { useState } from 'react';

function useFetch(initialUrl) {
  const [url, setUrl] = useState(initialUrl);

  return [url, setUrl];
}

export default useFetch;
