import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { postImages } from "./axios/gallery";
import Loading from "react-fullscreen-loading";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddPhoto(props) {
  const [file, setFile] = useState(null);
  const [msgState, setMsgState] = useState(0);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(0);

  const Rd = () => {
    if (redirect === 1) return <Redirect to="/" />;
    return null;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newFile = new FormData();
      newFile.append("file", file);
      setLoading(true);
      await postImages(newFile);
      Swal.fire("<h4>Posted</h4>", "Redirect to Home", "success").then(() => {
        setRedirect(1);
      });
    } catch (e) {
      setMsgState(2);
    }
    setLoading(false);
  };

  const Msg = (props) => {
    if (props.state === 1)
      return <Alert variant="danger"> Heading is Required </Alert>;
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
            style={{ textAlign: "center", fontSize: "3.5vh" }}
            id="contained-modal-title-vcenter"
          >
            Add Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Msg state={msgState} />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ margiTop: "20px", float: "right" }}
              variant=""
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer> </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
