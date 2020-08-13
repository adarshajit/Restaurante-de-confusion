import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDishes : null,
      comments : null
    }
  }

  onSelectedDish(dishId){
    this.setState({selectedDishes: dishId});

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
          <Menu dishes = {this.state.dishes} 
              onClick={(dishId)=> this.onSelectedDish(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishes)[0]}/>
      </div>
    );
    }
}


export default Main;
