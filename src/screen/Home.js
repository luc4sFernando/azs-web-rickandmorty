import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import useSWR from 'swr';
import fetcher from '../utils/requests';
import { EPISODIES_QUERY } from '../utils/requests';
import List from '../components/List';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`;
const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data } = useSWR([EPISODIES_QUERY, { page: pageNumber }], fetcher);
  const results = data?.data.episodes.results;

  return (
    <HomeContainer>
      <Banner />
      <button
        onClick={() => {
          setPageNumber((current) => current + 1);
        }}
      >
        ola
      </button>
      {results?.length > 0 && <List episodes={results} />}
    </HomeContainer>
  );
};

export default Home;
