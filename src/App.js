import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import './App.css';
import { render } from '@testing-library/react';
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    }
  }

  render(){
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
        <Menu dishes = {this.state.dishes} />
    </div>
  );
  }
}


export default App;
