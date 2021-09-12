import React, { useState } from "react";
import { Card, Button, Modal, Form, Alert } from "react-bootstrap";
import { Pen, Eye } from "react-bootstrap-icons";
import { FullView } from "./fullView";
import { postNews } from "./axios/news";
import Loading from "react-fullscreen-loading";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

import "./css/commsTools.css";

export function CreateNewsLetter(props) {
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msgState, setMsgState] = useState(0);
  const [redirect, setRedirect] = useState(0);

  const Rd = () => {
    if (redirect === 1) return <Redirect to="/news" />;
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
        await postNews(heading, body, newFile);
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
            Create News Letter
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
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicBody">
              <Form.Control
                placeholder="Body"
                resize="none"
                as="textarea"
                rows={10}
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

export function News(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <React.Fragment>
      <Card
        style={{
          marginBottom: "50px",
        }}
      >
        <Card.Header className="alert-date">{props.date}</Card.Header>
        <Card.Body>
          <Card.Title className="alert-head">{props.heading}</Card.Title>
          <hr />
          <Card.Text>
            <p className="alert-body">
              {props.paragraph.length > 50
                ? props.paragraph.substring(0, 50) + "..."
                : props.paragraph}
            </p>
          </Card.Text>
          <button className="primary" onClick={() => setModalShow(true)}>
            <Eye />
          </button>
          <FullView
            date={props.date}
            heading={props.heading}
            paragraph={props.paragraph}
            attach={props.attach}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
