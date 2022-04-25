import React from 'react';
import { Title, PageTitleWrapper } from './style';
import PropTypes from 'prop-types';
const PageTitle = ({ children }) => {
  return (
    <PageTitleWrapper>
      <Title>{children}</Title>
    </PageTitleWrapper>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string,
};
export default PageTitle;
