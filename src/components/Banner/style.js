import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;

  background-image: url(pic3.jpg);
  background-position: center top;
  background-size: cover;
`;
export const BannerColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.67);
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
export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
`;
export const BannerPicture = styled.img`
  width: 550px;
`;

export const BannerTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  flex-direction: column;
`;
export const BannerTitle = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  letter-spacing: -0.2rem;
  height: 20px;
`;
export const BannerDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const BannerDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;
export const BannerICon = styled.div`
  width: 10px;
  height: 43%;
  background-color: white;
  margin-right: 10px;
`;

export const BannerMeteorTop = styled.img`
  width: 500px;
  position: absolute;
  top: -350px;
`;
export const BannerMeteorBottom = styled.img`
  z-index: 1;
  position: absolute;
  left: 0;
  width: 300px;
`;
