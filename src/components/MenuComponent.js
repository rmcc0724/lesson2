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
import DishDetail from './DishdetailComponent';
class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  render() {
    console.log("Render the list function");
    const menu = this.props.dishes.map((dishlist) => {
      return (
        <div  className="col-12 col-md-5 m-1" key={dishlist.id}>
                <Card onClick={() => this.onDishSelect(dishlist)} >
                  <CardImg width="100%" src={dishlist.image} alt={dishlist.name} />
                  <CardImgOverlay>
                      <CardTitle>{dishlist.name}</CardTitle>
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
                <DishDetail dish={this.state.selectedDish}/>
    </div>
    );
  }
}
export default Menu;
