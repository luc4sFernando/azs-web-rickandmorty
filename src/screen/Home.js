import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`;
const Home = () => {
  return (
    <HomeContainer>
      <Banner />
    </HomeContainer>
  );
};

export default Home;
