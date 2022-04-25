import React from 'react';
import styled from 'styled-components';
import Backdrop from '../components/Backdrop';
import { useSearch } from '../components/hooks/useSearch';
import Navbar from '../components/Navbar';
import List from '../components/List';
import { useSearchParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;
const Home = () => {
  const foundEpisodes = useSearch();
  const [search] = useSearchParams();
  const val = search.get('search');

  return (
    <>
      <Navbar />
      <HomeContainer>
        {val && foundEpisodes.episodes.length > 0 ? (
          <>
            <PageTitle>Favoritos</PageTitle>
            <List episodes={foundEpisodes.episodes} />
          </>
        ) : (
          <Backdrop />
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
