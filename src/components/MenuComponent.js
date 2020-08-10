import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Card, CardImgOverlay,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';
import DishDetail from './DishDetailComponent';



class Menu extends Component{
    constructor(props){
    super(props)
    this.state ={
        selectedDishes : null,
        comments : null
    }
    }

    onSelectedDish(dish){
        this.setState({selectedDishes : dish});
        this.setState({ comments : dish.comments })
    
    }
    
    renderDish(dish){
        if (dish != null)
            {
                return(
                   <DishDetail dishes ={dish} comments ={this.state.comments}/>
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
                {this.renderDish(this.state.selectedDishes)}
              </div>
            </div>
          );
        }
}

export default Menu