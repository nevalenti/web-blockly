import { useState, useEffect } from 'react';

import axios from '../lib/axios';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);

    axios.get(url)
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('An error occurred. Awkward..');
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
