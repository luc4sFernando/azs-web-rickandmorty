import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MyContext from '../../utils/favoritesContext';
import Search from '../Search';

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
const Navbar = () => {
  const [favorites] = useContext(MyContext);

  return (
    <NavContainer>
      <Header>
        <NavLink to='/'>
          <Brand src='/b1.png' alt='brand' />
        </NavLink>
        <NavLink to='/episodes'>Episódios</NavLink>
        <NavLink to='/favorites'>Lista de Favoritos {favorites.length}</NavLink>
        <NavLink to='#'>Episódios Assistidos</NavLink>
        <Search />
      </Header>
    </NavContainer>
  );
};

export default Navbar;
