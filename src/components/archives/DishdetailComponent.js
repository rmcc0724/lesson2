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
        if (selected != null)
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
        else
            return (
                <div></div>
            );
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /* renderDish function takes the selected dish and returns the Card data */
    renderComments(selected) {
        if (selected != null)
            return (
                <Card>
                    <CardBody>
                    <CardTitle>Comments</CardTitle>
                      <CardText>{selected.comments[0].comment}</CardText>
                      <CardText>-- {selected.comments[0].author}  {convertDate(selected.comments[0].date)}</CardText>
                      <CardText>{selected.comments[1].comment}</CardText>
                      <CardText>-- {selected.comments[1].author}  {convertDate(selected.comments[1].date)}</CardText>
                      <CardText>{selected.comments[2].comment}</CardText>
                      <CardText>-- {selected.comments[2].author}  {convertDate(selected.comments[2].date)}</CardText>
                      <CardText>{selected.comments[3].comment}</CardText>                     
                      <CardText>-- {selected.comments[3].author}  {convertDate(selected.comments[3].date)}</CardText>
                      <CardText>{selected.comments[4].comment}</CardText>
                      <CardText>-- {selected.comments[4].author}  {convertDate(selected.comments[4].date)}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );


        //////////////////////////////////////////////////////////////////////////////////////
        // console.log(convertMonth(1) + " " + newDate.getDay() + ", " + newDate.getFullYear());
        // expected output: 1969

        function convertDate(arg) {
            var newDate = new Date(arg);
            return convertMonth(newDate.getMonth()+1) + " " + newDate.getDate() + ", " + newDate.getFullYear();
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

    }
    //////////////////////////////////////////////////////////////////////////////////////
    /* Render the selected DISH component */
    render() {
        const chosen = this.props.selectedDish;
        return (
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(chosen)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(chosen)}
                  </div>
                </div>

        );

    }
}
export default DishDetail;
