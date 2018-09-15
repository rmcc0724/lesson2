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
class Menu extends Component {


  render() {
    const menu = this.props.dishes.map((dish) => {
          console.log("onDishSelect render function");
      return (
        <div  className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
      );
    });
    return (
      <div className="container">
                <div className="row">
                    {menu}
                </div>
    </div>
    );
  }
}
export default Menu;
