import { useState, useEffect } from 'react';

export const useLocalStorage = (localStorageKey: string) => {
  const [value, setValue] = useState<any>([] || '');

  useEffect(() => {
    const data = localStorage.getItem(localStorageKey);
    if (data) {
      setValue(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
