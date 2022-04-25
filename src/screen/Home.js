/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Backdrop from '../components/Backdrop';
import { useSearch } from '../components/hooks/useSearch';
import Navbar from '../components/Navbar';
import List from '../components/List';
import { useSearchParams } from 'react-router-dom';
const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;
const Home = () => {
  const foundEpisodes = useSearch();
  const [search, setSearchParams] = useSearchParams();
  const val = search.get('search');

  return (
    <HomeContainer>
      <Navbar />
      {val && foundEpisodes.episodes?.length > 0 ? (
        <List episodes={foundEpisodes.episodes} />
      ) : (
        <Backdrop />
      )}
    </HomeContainer>
  );
};

export default Home;
