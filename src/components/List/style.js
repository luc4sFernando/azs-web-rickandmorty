import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;
export const ItemsWrapper = styled.div`
  width: 100%;
  max-width: 1290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  align-content: center;
  @media (max-width: 575.98px) {
    justify-content: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    justify-content: center;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    justify-content: center;
  }
`;
export const Item = styled.div`
  width: 390px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  padding: 10px 0 10px 20px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  cursor: pointer;
  color: black;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
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
  padding: 0px 20px;
`;
export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: gray;
  margin: 10px;
`;

export const IconsContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 0px;
  top: 0px;
  color: white;
  z-index: 20;
`;
export const IconBackground = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: black;
  background-color: ${(props) => (props.color ? '#f5c519' : '#d9d9d9')};
`;
