import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

//////////////////////////////////////////////////////////////////////////////////////
/* This is the functional component for the selected Dish detail presentational component */
const RenderDish = ({ dish }) => {
    return (
        <div className="col-12 col-md-5 m-1">
               <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardText>{dish.name}</CardText>    
                      <CardText>{dish.description}</CardText>    
                    </CardBody>
                </Card>
                 </div>
    );
};

//////////////////////////////////////////////////////////////////////////////////////
/* This is the functional component for the selected Dish comments presentational component */
const RenderComments = ({ commentList }) => {

    return (
        <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                      <ul className="list-unstyled">
                              {commentList.map((comments) => {
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
                <RenderDish dish={(props.dish)}/>
                <RenderComments commentList={(props.dish.comments)}/>
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
};

export default DishDetail;
