import { useState } from 'react';

const useLocalStorage = (key, val = { favorites: [], watched: [] }) => {
  const [preferences, setPreferences] = useState(() => {
    const storagePreference = JSON.parse(localStorage.getItem(key));

    return storagePreference || val;
  });

  return [preferences, setPreferences];
};

export default useLocalStorage;
