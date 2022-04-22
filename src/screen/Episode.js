import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import useSwr from '../utils/useSwr';
import { EPISODIE_QUERY } from '../utils/requests';

const Container = styled.div`
  width: 100%;
  background-color: white;
`;
const Banner = styled.div`
  width: 100%;
  max-width: 1290px;
  height: 600px;
  margin: 0 auto;
  background-image: url(/banner_episode.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div``;

const Label = styled.p`
  font-size: 2rem;
  color: #f7bf31;
  margin: 0;
  font-style: italic;
`;
const Title = styled.h1`
  font-size: 3.4rem;
  color: white;
  margin: 10px;
`;
const Subtitle = styled.p`
  font-size: 1.8rem;
  color: white;
  margin: 10px;
`;

const PersonsWrapper = styled.div`
  width: 100%;
  max-width: 1290px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const PersonCard = styled.div`
  width: 280px;
  margin: 20px 10px;
  color: black;
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    width: 110px;
    border-radius: 50%;
  }
`;

const PageTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 3.2rem;
  color: black;
  width: 200px;

  &::before {
    height: 20px;
    content: '';
    padding: 0px 3px;
    background-color: #f5c519;
    margin-right: 05px;
  }
`;
const PageTitleWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const Episode = () => {
  const params = useParams();

  const [data] = useSwr(EPISODIE_QUERY, { id: params.id });

  const episode = data?.data.episode.characters;
  return (
    <>
      <Navbar />
      <Container>
        <Banner>
          <TitleWrapper>
            <Label>NOME DO EPISÓDIO</Label>
            <Title>{data?.data.episode.name}</Title>
            <Label>INFO</Label>
            <Subtitle>
              {data?.data.episode.episode} | {data?.data.episode.air_date}.
            </Subtitle>
            <Subtitle></Subtitle>
          </TitleWrapper>
        </Banner>
        <PageTitleWrapper>
          <PageTitle>Personagens</PageTitle>
        </PageTitleWrapper>
        <PersonsWrapper>
          {episode &&
            episode.map((item) => (
              <PersonCard key={item.id}>
                <img src={item.image} alt='card' />
                <h2>{item.name}</h2>
                <p>{item.species}</p>
                <p>{item.status}</p>
              </PersonCard>
            ))}
        </PersonsWrapper>
      </Container>
    </>
  );
};

export default Episode;
