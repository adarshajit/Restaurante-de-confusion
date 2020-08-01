import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import './App.css';
import { render } from '@testing-library/react';
import Menu from './components/MenuComponent'


function App() {
  render() 
  {
  return (
    <div>
      <Navbar color="light" light expand="md">
       <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/extras">Extras</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
        <Menu />
    </div>
  );
  }
}

export default App;
