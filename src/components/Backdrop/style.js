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
`;

export const BannerTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
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
`;
export const BannerICon = styled.div`
  width: 10px;
  height: 50%;
  background-color: white;
  margin-right: 10px;
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
