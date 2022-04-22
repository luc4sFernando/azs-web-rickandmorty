import React, { useState } from 'react';
import styled from 'styled-components';
import { EPISODIES_QUERY } from '../utils/requests';
import List from '../components/List';
import Navbar from '../components/Navbar';
import PaginationControl from '../components/PaginationControl';
import Loading from '../components/Loading';
import useSwr from '../utils/useSwr';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  diplay: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(pic2.png);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(72, 72, 72, 0.82);
`;
const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data] = useSwr(EPISODIES_QUERY, { page: pageNumber });
  const results = data?.data.episodes.results;
  const pages = data?.data.episodes.info;

  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          {results?.length > 0 ? (
            <>
              <PaginationControl
                count={1}
                setPageNumber={setPageNumber}
                pages={pages}
              />
              <List episodes={results} />
            </>
          ) : (
            <Loading />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Episodes;
