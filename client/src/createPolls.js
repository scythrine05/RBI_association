import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import "./css/createPolls.css";

export default class CreatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      subject: "",
      options: [{ option: "", votes: 0 }],
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleNameChange = (evt) => {
    this.setState({ subject: evt.target.value });
  };

  handleOptionNameChange = (idx) => (evt) => {
    const newOptions = this.state.options.map((op, sidx) => {
      if (idx !== sidx) return op;
      return { ...op, option: evt.target.value };
    });

    this.setState({ options: newOptions });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let subject = this.state.subject;
    let options = this.state.options;
    this.props.createPoll(subject, options);
    this.setState({
      show: false,
      subject: "",
      options: [{ option: "", votes: 0 }],
    });
  };

  handleAddOption = () => {
    this.setState({
      options: this.state.options.concat([{ option: "", votes: 0 }]),
    });
  };

  handleRemoveOption = (idx) => () => {
    this.setState({
      options: this.state.options.filter((s, sidx) => idx !== sidx),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="" size="lg" onClick={this.handleShow}>
          Create poll
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Poll</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={this.handleNameChange}
                />
                {this.state.options.map((op, idx) => (
                  <div>
                    <Form.Control
                      type="text"
                      placeholder={`Option-${idx + 1}`}
                      value={op.option}
                      onChange={this.handleOptionNameChange(idx)}
                    />
                    <Button
                      type="button"
                      onClick={this.handleRemoveOption(idx)}
                      className="small"
                      variant=""
                    >
                      Remove option
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={this.handleAddOption}
                  className="small"
                  variant=""
                >
                  Add option
                </Button>
                <Button variant="" type="submit">
                  Create
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
