import React from 'react';
// import Navbar from '../Navbar';
import {
  BannerButton,
  BannerColor,
  BannerContainer,
  BannerContentWrapper,
  BannerDescription,
  BannerDescriptionWrapper,
  BannerICon,
  BannerTextWrapper,
  BannerTitle,
} from './style';
import Typed from 'react-typed';
const Banner = () => {
  return (
    <BannerContainer>
      <BannerColor>
        <BannerContentWrapper>
          <BannerTextWrapper>
            <BannerTitle>Ryck and Morty API</BannerTitle>
            <BannerDescriptionWrapper>
              <BannerICon />

              <BannerDescription>
                <Typed
                  strings={[
                    'Bem vindo, aqui você fica sabendo tudo sobre os episódios de rick and morty.',
                  ]}
                  typeSpeed={50}
                />
              </BannerDescription>
            </BannerDescriptionWrapper>
            <BannerButton to='/episodes'>Lista de Episódios</BannerButton>
          </BannerTextWrapper>
        </BannerContentWrapper>
      </BannerColor>
    </BannerContainer>
  );
};

export default Banner;
