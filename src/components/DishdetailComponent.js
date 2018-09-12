import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
}
from 'reactstrap';
//////////////////////////////////////////////////////////////////////////////////////
/* Selected DISH Props Contructor */

class DishDetail extends Component {

    //////////////////////////////////////////////////////////////////////////////////////
    /* renderDish function takes the selected dish and returns the Card data */
    renderDish(selected) {
        return (
            <Card key={selected.id}>
                    <CardImg top src={selected.image} alt={selected.name} />
                    <CardBody>
                      <CardText>{selected.description}</CardText>    
                      <CardText>{selected.price}</CardText>    
                      <CardText>{selected.label}</CardText>    
                    </CardBody>
                </Card>
        );
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /* renderDish function takes the selected dish and returns the Card data */
    renderComments(selected) {
        const selectedMap = selected.map((commentList) => {
            return (
                <div key={commentList.id}>
                      <p>{commentList.comment}</p>
                      <p>-- {commentList.author}  {convertDate(commentList.date)}</p>
             </div>);
        });
        return selectedMap;
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /* Render the selected DISH component from the dish variable we created <DishDetail dish=......./> */
    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                  </div>
                 <div  className="col-12 col-md-5 m-1">
                     <h4>Comments</h4>
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


//////////////////////////////////////////////////////////////////////////////////////
/* Custom Functions */


function convertDate(arg) {
    var newDate = new Date(arg);
    return convertMonth(newDate.getMonth() + 1) + " " + newDate.getDate() + ", " + newDate.getFullYear();
}

function convertMonth(month) {
    switch (month) {
        case 1:
            month = "Jan.";
            break;
        case 2:
            month = "Feb.";
            break;
        case 3:
            month = "Mar.";
            break;
        case 4:
            month = "Apr.";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "Jun.";
            break;
        case 7:
            month = "Jul.";
            break;
        case 8:
            month = "Aug.";
            break;
        case 9:
            month = "Sept.";
            break;
        case 10:
            month = "Oct.";
            break;
        case 11:
            month = "Nov.";
            break;
        case 12:
            month = "Dec.";
    }
    return month;
}
