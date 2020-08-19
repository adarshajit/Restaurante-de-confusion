import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
          <Header />
          <Menu dishes = {this.state.dishes} 
              onClick={(dishId)=> this.onSelectedDish(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishes)[0]}/>
          <Footer />
      </div>
    );
    }
}


export default Main;
