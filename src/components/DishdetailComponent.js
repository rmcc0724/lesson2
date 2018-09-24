import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Input,
    Label
}
from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
    }

    render() {

        return (
            <div>
           <Button outline onClick={this.toggleModal}><span className="fa fa-pencil
           
           fa-lg"></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={this.handleSubmit}>
                            <FormGroup>
          <Label for="rating">Rating</Label>
          <Input type="select" name="rating" id="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                 <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">Comment</Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
        );
    }
}

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
                              <li><CommentForm/></li>
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
