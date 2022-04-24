/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Backdrop from '../components/Backdrop';
import { useSearch } from '../components/hooks/searchContext';
import Navbar from '../components/Navbar';
import List from '../components/List';
const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;
const Home = () => {
  const search = useSearch();

  return (
    <HomeContainer>
      <Navbar />
      {search.episodes?.length > 0 ? (
        <List episodes={search.episodes} />
      ) : (
        <Backdrop />
      )}
    </HomeContainer>
  );
};

export default Home;
