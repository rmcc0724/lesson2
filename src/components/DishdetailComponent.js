import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Breadcrumb,
    BreadcrumbItem
}
from 'reactstrap';
import { Link } from 'react-router-dom';

//////////////////////////////////////////////////////////////////////////////////////
/* This is the functional component for the selected Dish detail presentational component */
const RenderDish = ({ dish }) => {
    return (

               <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardText>{dish.name}</CardText>    
                      <CardText>{dish.description}</CardText>    
                    </CardBody>
                </Card>

    );
};

//////////////////////////////////////////////////////////////////////////////////////
/* This is the functional component for the selected Dish comments presentational component */
const RenderComments = ({ comments }) => {

    return (
            <div className="container">
                <h4>Comments</h4>
                      <ul className="list-unstyled">
                              {comments.map((comments) => {
                              return (
                      <li key={comments.id}>
                      <p>{comments.comment}<br/>
                      -- {comments.author}  {new Intl.DateTimeFormat('en-US',
                           { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(comments.date))}</p>
                        </li>
                              );
                              })}
                    </ul>
                </div>
    );
};

//////////////////////////////////////////////////////////////////////////////////////
/* This is the container for the DishDetail component, it takes the selected dish props as an arg and passes to the functional components above */
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
        );
    
}
else {
    return (<div></div>);
}
};

export default DishDetail;
