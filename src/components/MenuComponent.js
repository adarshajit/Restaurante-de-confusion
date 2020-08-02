import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Card, CardImgOverlay,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';



class Menu extends Component{
    constructor(props){
    super(props)
    this.state ={
        selectedDishes : null  
    }
    }

    onSelectedDish(dishes){
        this.setState({selectedDishes : dishes});}
    
    cardRender(dish){
        if (dish != null)
            {
                return(
                    <Card>
                        <CardImg width = "100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
    const menu = this.props.dishes.map((dish)=>{
        return(
            <div className="col-12 col-md-5 mt-1">
        
                <Card key={dish.id} 
                onClick={()=>this.onSelectedDish(dish)}>
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    })

        return (
            <div className="container">
              <div className="row">
                {menu}
              </div>
              <div className="row">
                {this.cardRender(this.state.selectedDishes)}
              </div>
            </div>
          );
        }
}

export default Menu