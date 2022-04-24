import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Container, Title, Subtitle, Picture, TitleWrapper } from './style';
const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <>
      <Container>
        <Picture url={imageUrl}>
          {title && (
            <TitleWrapper>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </TitleWrapper>
          )}
        </Picture>
      </Container>
    </>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Banner;
