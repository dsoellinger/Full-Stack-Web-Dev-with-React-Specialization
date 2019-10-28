import React, { Component } from 'react';
import { Label, Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>
          Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" defaultValue="1" className="form-control" name="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="name" md={12}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".name" id="name" className="form-control" name="name" placeholder="Your Name"
                                validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}/>
                  <Errors className="text-danger" model=".name" show="touched"
                          messages={{
                            required: 'Required. ',
                            minLength: 'Must be greater than 2 numbers. ',
                            maxLength: 'Must be 15 numbers or less. '
                          }} />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".message" id="message" rows="6" className="form-control" name="message" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }

}

export default CommentForm;
