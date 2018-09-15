import React, { Component } from 'react';
// eslint-disable-next-line
import { Media } from 'reactstrap';
import {
    Card,
    CardImg,
    CardImgOverlay,
    // eslint-disable-next-line
    CardText,
    // eslint-disable-next-line
    CardBody,
    CardTitle
}
from 'reactstrap';


//////////////////////////////////////////////////////////////////////////////////////
/* Selected DISH Props Contructor */

class DishDetail extends Component {

    //////////////////////////////////////////////////////////////////////////////////////
    /* renderDish function takes the selected dish and returns the Card data */
    renderDish() {
        return (
            <div className="col-12 col-md-5 m-1">
               <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardText>{this.props.dish.name}</CardText>    
                      <CardText>{this.props.dish.description}</CardText>    
                    </CardBody>
                </Card>
                 </div>
        );
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /* renderDish function takes the selected dish and returns the Card data */
    renderComments(commentList) {

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
    }

    //////////////////////////////////////////////////////////////////////////////////////
    /* Render the selected DISH component from the dish variable we created <DishDetail dish=......./> */
    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
                </div>
                                </div>

            );
        }
        else {
            return (<div></div>);
        }
    }
}
export default DishDetail;
