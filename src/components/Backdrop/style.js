import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
const hidenbutton = keyframes`
from {
 opacity: 0;
}
85% {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/pic3.jpg);
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 575.98px) {
    background-position: -900px;
    background-size: cover;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    background-position: -750px;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    background-position: -650px;
    background-size: cover;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    background-position: -450px;
    background-size: cover;
  }
`;
export const BannerColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.57);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
export const BannerContentWrapper = styled.div`
  width: 100%;
  max-width: 1290px;
  display: flex;
  position: relative;
  justify-content: space-between;
  min-height: 790px;

  @media (max-width: 575.98px) {
    justify-content: space-between;
  }
`;

export const BannerTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  @media (max-width: 575.98px) {
    margin-left: 40px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-left: 40px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-left: 40px;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    margin-left: 40px;
  }
  @media (min-width: 1200px) and (max-width: 1290px) {
    margin: 40px;
  }
`;
export const BannerTitle = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-size: 6.2rem;
  font-weight: 500;
  letter-spacing: -0.2rem;
  margin-bottom: 10px;
`;
export const BannerDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const BannerDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 20px;
  align-items: center;
`;
export const BannerICon = styled.div`
  width: 10px;
  height: 50%;
  background-color: white;
  margin-right: 10px;
  @media (max-width: 575.98px) {
    height: 62%;
    width: 14px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 56%;
  }
  @media (min-width: 1200px) {
    height: 50%;
  }
`;

export const BannerButton = styled(Link)`
  background-color: white;
  color: green;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  font-size: 1.5rem;
  animation: ${hidenbutton} 6s;
  border-radius: 15px;
  &:hover {
    transition: all 0.5s;
    background-color: green;
    color: white;
  }
`;
