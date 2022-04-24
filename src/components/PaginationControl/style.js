import styled from 'styled-components';

export const ControlContainer = styled.div`
  width: 100%;
  max-width: 1290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  gap: 10px;
`;

export const PageTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 3.2rem;
  color: black !important;
  width: 200px;

  &::before {
    height: 20px;
    content: '';
    padding: 0px 3px;
    background-color: #f5c519;
    margin-right: 05px;
  }
`;
