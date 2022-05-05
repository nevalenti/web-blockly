import { useState } from 'react';
import Cookies from 'js-cookie';

function useCookies(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = Cookies.getItem(key);

      return item || initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        Cookies.setItem(key, valueToStore);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useCookies;
