import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  background-color: black;
  margin: 0 auto;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  width: auto;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-family: 'Helvetica';
`;
export const Label = styled.p`
  font-size: 1.2rem;
  font-family: 'Helvetica';
`;
export const SubtitleWrapper = styled.div`
  display: flex;
`;
export const Subtitle = styled.p``;
