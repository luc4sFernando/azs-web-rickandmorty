/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
const MyContext = createContext([]);
const PreferencesProvider = ({
  children,
  state: [preferences, setPreferences],
}) => {
  return (
    <MyContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </MyContext.Provider>
  );
};
export default PreferencesProvider;
export const usePreferences = () => {
  const value = useContext(MyContext);

  return [value.preferences, value.setPreferences];
};
