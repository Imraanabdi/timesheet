import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #343a40;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled.div`
  color: #fff;
  font-size: 1.5em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavBrand>Timesheet </NavBrand>
      <NavLinks>
        <NavLink href="#home">Dashboard</NavLink>
        <NavLink href="#add-entry">Add Entry</NavLink>
        <NavLink href="#history">History</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
