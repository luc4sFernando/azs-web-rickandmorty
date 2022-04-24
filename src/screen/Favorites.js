import React, { useContext } from 'react';
import styled from 'styled-components';
import List from '../components/List';
import Navbar from '../components/Navbar';
import MyContext from '../utils/favoritesContext';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Favorites = () => {
  const [favorites] = useContext(MyContext);
  return (
    <>
      <Navbar />
      <Container>
        <List episodes={favorites} />
      </Container>
    </>
  );
};

export default Favorites;
