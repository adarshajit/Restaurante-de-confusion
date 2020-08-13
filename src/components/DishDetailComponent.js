import React, { Component } from 'react';
import { Card,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';



class DishDetail extends Component{
    
    renderDish(dish){
        if(dish != null){
            return(
                    <Card>
                        <CardImg 
                            width = "100%" 
                            src={dish.image} 
                            alt={dish.name} 
                        />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
    }else{
        return(
            <div></div>
        )

    }
}
    renderComments(dish){
        if(dish != null){
            let list = dish.comments.map((comment) =>{
                return(
                    <div key={comment.id}>
                    <Card>
                        <CardBody>
                            <CardTitle><h5>{comment.comment}</h5></CardTitle>
                            <CardText>--{comment.author},{comment.date}</CardText>
                        </CardBody>
                    </Card>
    
                </div>
                )
            })
        return(
            <div>
                <h2>Comments</h2>
                {list}
            </div> )
        }
        else{
            return(
            <div></div>)
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                    

                </div>

            </div>
        )
    }



    }


export default DishDetail;