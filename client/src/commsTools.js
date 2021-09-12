import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { Pen, Eye } from "react-bootstrap-icons";
import { FullView } from "./fullView";
import { Redirect } from "react-router-dom";
import { postComms } from "./axios/communication";
import Loading from "react-fullscreen-loading";
import Swal from "sweetalert2";

import "./css/commsTools.css";

export function CreateNotice(props) {
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msgState, setMsgState] = useState(0);
  const [redirect, setRedirect] = useState(0);

  const Rd = () => {
    if (redirect === 1) return <Redirect to="/communication" />;
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (heading === "" || body === "") setMsgState(1);
      else {
        const newFile = new FormData();
        newFile.append("file", file);
        setLoading(true);
        await postComms(heading, body, newFile);
        Swal.fire("<h4>Posted</h4>", "", "success").then(() => {
          setRedirect(1);
        });
      }
    } catch (e) {
      setMsgState(2);
    }
    setLoading(false);
  };
  const Msg = (props) => {
    if (props.state === 1)
      return <Alert variant="danger"> Fields Empty </Alert>;
    if (props.state === 2)
      return <Alert variant="danger">Error: Check file Type </Alert>;
    return null;
  };
  return (
    <React.Fragment>
      <Rd />
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Loading
          loading={loading}
          background="rgba(0,0,0,0.8)"
          loaderColor="#3498db"
        />
        <Modal.Header closeButton>
          <Modal.Title
            style={{ fontSize: "25px" }}
            id="contained-modal-title-vcenter"
          >
            Create Notice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Msg state={msgState} />
          <Form onSubmit={handleSubmit}>
            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicHeading"
            >
              <Form.Control
                type="text"
                placeholder="Heading"
                value={heading}
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicBody">
              <Form.Control
                placeholder="Body"
                as="textarea"
                rows={10}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <Form.Group>
                <Form.File
                  id="FormControlAttachment1"
                  name="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </Form.Group>
            </Form.Group>
            <Button
              type="submit"
              style={{ margiTop: "20px", float: "right" }}
              variant=""
            >
              <Pen />
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer> </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export function Cards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Alert variant="info" style={{ borderRadius: "0px" }}>
        <Alert.Heading className="alert-date">{props.date}</Alert.Heading>
        <hr />
        <h2 className="alert-head">{props.heading}</h2>
        <hr />
        <p className="alert-body">
          {props.paragraph.length > 50
            ? props.paragraph.substring(0, 50) + "..."
            : props.paragraph}
        </p>
        <hr />
        <button className="primary" onClick={() => setModalShow(true)}>
          <Eye />
        </button>
        <FullView
          img={props.img}
          date={props.date}
          heading={props.heading}
          paragraph={props.paragraph}
          attach={props.attach}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Alert>
    </div>
  );
}

export function FCards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Alert variant="info" style={{ borderRadius: "0px" }}>
        <Alert.Heading className="alert-date">{props.date}</Alert.Heading>
        <h2 className="alert-head">
          {props.heading.length > 10
            ? props.heading.substring(0, 10) + "..."
            : props.heading}
        </h2>
        <hr />
        <p className="alert-para">
          {props.paragraph.length > 20
            ? props.paragraph.substring(0, 20) + "..."
            : props.paragraph}
        </p>
        <hr />
        <button
          className="primary"
          variant=""
          onClick={() => setModalShow(true)}
        >
          <Eye />
        </button>
        <FullView
          img={props.img}
          date={props.date}
          heading={props.heading}
          paragraph={props.paragraph}
          attach={props.attach}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Alert>
    </div>
  );
}
