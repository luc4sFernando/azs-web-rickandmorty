import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 20px auto;
`;
export const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 05px;
`;
export const Item = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  padding: 0 10px;
  border: 2px solid green;
  cursor: pointer;
  &:hover {
    border-color: yellow;
    color: yellow;
  }
  &:hover * {
    color: yellow;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-family: 'Helvetica';
  max-width: 250px;
`;
export const Label = styled.p`
  font-size: 1.2rem;
  font-family: 'Helvetica';
`;
export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 05px;
  color: green;
  margin: 0;
  padding: 0;
`;
export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: white;
  margin: 10px;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 0px;
  top: 0px;
  color: white;
  background-color: green;
  padding: 10px;
  z-index: 20;
`;
