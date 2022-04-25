import styled from 'styled-components';

export const ControlContainer = styled.div`
  width: 100%;
  max-width: 1290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 575.98px) {
    padding: 0 40px;
    width: auto;
  }
  @media (min-width: 576px) and (max-width: 829.99px) {
    justify-content: space-around;
    width: 100%;
  }
  @media (min-width: 830px) and (max-width: 990px) {
    padding: 0 40px;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 100%;
    padding: 0 40px;
  }
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
