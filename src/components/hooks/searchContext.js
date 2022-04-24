/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

const SearchContext = createContext(null);

export const SearchProvider = ({
  children,
  state: [episodes, searchEpisodes],
}) => {
  return (
    <SearchContext.Provider value={{ episodes, searchEpisodes }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
