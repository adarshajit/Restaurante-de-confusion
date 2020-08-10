import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Card, CardImgOverlay,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';



class DishDetail extends Component{
    constructor(props){
    super(props)

    }


render(){
    const details = this.props.dishes;
    const list = this.props.comments.map((comment)=>{
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
        <div className="row">
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg 
                        width = "100%" 
                        src={details.image} 
                        alt={details.name} 
                    />
                    <CardBody>
                        <CardTitle>{details.name}</CardTitle>
                        <CardText>{details.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        <div className="col-12 col-md-5 mt-1">
            <h2>Comments</h2>
            {list}
        </div>
    </div>
    )
}

}

export default DishDetail;