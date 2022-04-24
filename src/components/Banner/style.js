import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
`;
export const Picture = styled.div`
  width: 100%;
  max-width: 1290px;
  height: 600px;
  margin: 0 auto;
  background-image: ${(props) =>
    props.url ? `url(${props.url})` : `url(/banner_episode.jpg)`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 3.4rem;
  color: white;
  margin: 0 20px 0 0;
  font-family: 'Helvetica';
  letter-spacing: -2px;
`;
export const Subtitle = styled.p`
  font-size: 1.8rem;
  color: gray;
`;
