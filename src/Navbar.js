import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: #F0EDCF;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled(Link)`
  color: #343a40;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #343a40;
    color: #F0EDCF;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/timesheet-history">Timesheet History</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
