import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 3.2rem;
  width: 200px;
  color: black;
  &:before {
    height: 20px;
    content: '';
    padding: 0px 3px;
    background-color: #f5c519;
    margin-right: 05px;
  }
`;
export const PageTitleWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 150px auto 0;
`;
