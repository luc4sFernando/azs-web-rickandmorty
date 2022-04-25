import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';
import Search from '../Search';
import { usePreferences } from '../hooks/usePreferences';
import useMediaQuery from '../hooks/useMediaQuery';

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  font-size: 1.4rem;
  position: fixed;
  top: 0;
  z-index: 999;
  @media (max-width: 900px) {
    justify-content: flex-start;
    padding-left: 40px;
    height: 70px;
  }
`;
const Header = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 1290px;
`;
const Brand = styled.img`
  width: 150px;
  padding: 10px 0;
`;
const NavLink = styled(Link)`
  cursor: pointer;
`;
const HidenMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: rgba(171, 255, 127, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 2rem;
  padding-top: 50px;
`;
const Navbar = () => {
  const [preferences] = usePreferences();
  const size = useMediaQuery();
  console.log(size);
  const [active, setActive] = useState(false);
  return (
    <NavContainer>
      {size < 900 && (
        <>
          <HiMenuAlt2 size='45px' onClick={() => setActive((prev) => !prev)} />
          {active && (
            <HidenMenu>
              <NavLink to='/episodes'>Episódios</NavLink>
              <NavLink to='/favorites'>
                Lista de Favoritos {preferences?.favorites.length}
              </NavLink>
              <NavLink to='/watched'>Episódios Assistidos</NavLink>
              <Search />
            </HidenMenu>
          )}
        </>
      )}
      {size > 900 && (
        <Header>
          <NavLink to='/'>
            <Brand src='/b1.png' alt='brand' />
          </NavLink>
          <NavLink to='/episodes'>Episódios</NavLink>
          <NavLink to='/favorites'>
            Lista de Favoritos {preferences?.favorites.length}
          </NavLink>
          <NavLink to='/watched'>Episódios Assistidos</NavLink>
          <Search />
        </Header>
      )}
    </NavContainer>
  );
};

export default Navbar;
