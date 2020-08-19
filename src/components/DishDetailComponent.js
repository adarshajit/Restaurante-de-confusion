import React, { Component } from 'react';
import { Card,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';



    function RenderDish({dish}){
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
    function RenderComments({dish}){
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

    const DishDetail = (props)=>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
                    </div>
                    

                </div>

            </div>
        )
    }






export default DishDetail;