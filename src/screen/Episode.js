import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import useSwr from '../utils/useSwr';
import { EPISODIE_QUERY } from '../utils/requests';
import LoadingComponent from '../components/Loading/';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';

const Container = styled.div`
  width: 100%;
  background-color: white;
  max-width: 1290px;
  margin: 0 auto;
`;
const PageTitleContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  @media (min-width: 1199px) {
    padding: 0;
  }
`;
const PersonsWrapper = styled.div`
  width: 100%;
  max-width: 1290px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1199px) {
    justify-content: flex-start;
  }
`;
const PersonCard = styled.div`
  margin: 20px 10px;
  color: black;
  display: flex;
  align-items: center;
  width: 200px;
  img {
    object-fit: contain;
    width: 110px;
    border-radius: 50%;
  }
`;
const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;
`;
const CardTitle = styled.h2`
  font-size: 1.8rem;
  color: black;
  font-weight: 600;
  margin-bottom: 05px;
`;
const CardParagraph = styled.p`
  font-size: 1.5rem;
  color: gray;
  margin: 0;
`;

const Episode = () => {
  const params = useParams();
  const [data] = useSwr(EPISODIE_QUERY, { id: params.id });
  const characters = data?.data.episode.characters;
  const episode = data?.data.episode;

  return (
    <>
      {data ? (
        <>
          <Navbar />
          <Container>
            <Banner title={episode?.name} subtitle={episode?.air_date} />
            <PageTitleContainer>
              <PageTitle>Personagens</PageTitle>
            </PageTitleContainer>
            <PersonsWrapper>
              {characters &&
                characters.map((item) => (
                  <PersonCard key={item.id}>
                    <img src={item.image} alt='card' />
                    <CardContent>
                      <CardTitle>{item.name}</CardTitle>
                      <CardParagraph>
                        {item.species}, {item.status}.
                      </CardParagraph>
                    </CardContent>
                  </PersonCard>
                ))}
            </PersonsWrapper>
          </Container>
        </>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default Episode;
