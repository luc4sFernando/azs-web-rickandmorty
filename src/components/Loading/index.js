import React from 'react';
import { LoadingWrapper, Loading, LoadingContainer } from './style';

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
        <Loading></Loading>
        <Loading></Loading>
        <Loading></Loading>
      </LoadingWrapper>
    </LoadingContainer>
  );
};

export default LoadingComponent;
