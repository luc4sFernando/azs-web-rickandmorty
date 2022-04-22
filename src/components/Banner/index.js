import React from 'react';
import Navbar from '../Navbar';
import {
  BannerColor,
  BannerContainer,
  BannerContentWrapper,
  BannerDescription,
  BannerDescriptionWrapper,
  BannerICon,
  BannerTextWrapper,
  BannerTitle,
} from './style';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerColor>
        <Navbar />
        <BannerContentWrapper>
          <BannerTextWrapper>
            <BannerTitle>Ricky and Morty API</BannerTitle>
            <BannerDescriptionWrapper>
              <BannerICon />
              <BannerDescription>Buscar episodio pelo nome.</BannerDescription>
            </BannerDescriptionWrapper>
          </BannerTextWrapper>
        </BannerContentWrapper>
      </BannerColor>
    </BannerContainer>
  );
};

export default Banner;
