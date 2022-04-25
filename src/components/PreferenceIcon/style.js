import styled from 'styled-components';
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
  background-color: ${(props) =>
    props.type
      ? props.color
        ? '#f5c519'
        : '#d9d9d9'
      : props.color
      ? '#f5c519'
      : '#d9d9d9'};
`;
