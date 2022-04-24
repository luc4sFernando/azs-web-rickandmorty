import React, { useState } from 'react';
import styled from 'styled-components';
import { EPISODIES_QUERY } from '../utils/requests';
import List from '../components/List';
import Navbar from '../components/Navbar';
import PaginationControl from '../components/PaginationControl';
import LoadingComponent from '../components/Loading/';
import useSwr from '../utils/useSwr';
import Banner from '../components/Banner';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  diplay: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data] = useSwr(EPISODIES_QUERY, { page: pageNumber });
  const results = data?.data.episodes.results;
  const pages = data?.data.episodes.info;

  return (
    <>
      {data ? (
        <Container>
          <Navbar />
          <Banner imageUrl='/pic4.jpg' />

          <PaginationControl
            count={1}
            setPageNumber={setPageNumber}
            pages={pages}
          />
          <List episodes={results} />
        </Container>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default Episodes;
