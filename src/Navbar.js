import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: linear-gradient(to right, #ff6b6b, #556270); /* Updated gradient colors */
  padding: 20px 30px; /* Increased padding */
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
  color: #fff; /* Changed text color to white */
  text-decoration: none;
  padding: 15px 20px; /* Increased padding */
  border-radius: 6px; /* Slightly rounded corners */
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #f4d35e; /* Hover background color */
    color: #000; /* Hover text color */
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
