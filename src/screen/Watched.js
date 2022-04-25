import React from 'react';
import styled from 'styled-components';
import { usePreferences } from '../components/hooks/usePreferences';
import List from '../components/List';
import Navbar from '../components/Navbar';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const Watched = () => {
  const [preferences] = usePreferences();

  return (
    <>
      <Navbar />
      <Container>
        {preferences.watched.length > 0 ? (
          <List episodes={preferences.watched} />
        ) : (
          <h1>Lista vazia</h1>
        )}
      </Container>
    </>
  );
};

export default Watched;
