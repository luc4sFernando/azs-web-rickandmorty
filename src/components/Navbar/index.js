import React from 'react';
import styled from 'styled-components';
const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Brand = styled.img`
  width: 250px;
`;
const Navbar = () => {
  return (
    <NavContainer>
      <Brand src='logo-colorido.png' alt='brand' />
      <Brand src='brand.png' alt='brand' />
    </NavContainer>
  );
};

export default Navbar;
