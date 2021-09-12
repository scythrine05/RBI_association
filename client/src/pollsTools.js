import React, { useState } from "react";
import {
  Modal,
  Alert,
  Form,
  Button,
  Container,
  Spinner,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Loading from "react-fullscreen-loading";
import { Plus, X, Pen } from "react-bootstrap-icons";
import { postPolls, votePolls } from "./axios/polls";
import Swal from "sweetalert2";

import "./css/pollsTools.css";
import "./css/commsTools.css";

export function CreatePolls(props) {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [fields, setFields] = useState([{ value: null }]);
  const [msgState, setMsgState] = useState(0);
  const [redirect, setRedirect] = useState(0);

  const Rd = () => {
    if (redirect === 1) return <Redirect to="/polls" />;
    return null;
  };

  const hasDuplicate = (arrayObj, colName) => {
    var hash = Object.create(null);
    return arrayObj.some((arr) => {
      return (
        arr[colName] && (hash[arr[colName]] || !(hash[arr[colName]] = true))
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isDuplicate = hasDuplicate(fields, "value");
    try {
      if (question === "") setMsgState(1);
      else if (isDuplicate) setMsgState(3);
      else {
        setLoading(true);
        await postPolls(question, fields);
        Swal.fire("<h4>Posted</h4>", "", "success").then(() => {
          setRedirect(1);
        });
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  const Msg = (props) => {
    if (props.state === 1)
      return <Alert variant="danger">Question is Required </Alert>;
    if (props.state === 2)
      return <Alert variant="danger">Error: Check file Type </Alert>;
    if (props.state === 3)
      return <Alert variant="danger">Options cannot be Duplicated</Alert>;
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
            Create Polls
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
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Group>
            {fields.map((field, idx) => {
              return (
                <div key={`${field}-${idx}`}>
                  <Form.Control
                    type="text"
                    placeholder={`Option ${idx + 1}`}
                    onChange={(e) => handleChange(idx, e)}
                    value={field.value}
                  />
                  <Button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    style={{ marginBottom: "10px", marginTop: "10px" }}
                  >
                    <X />
                  </Button>
                </div>
              );
            })}
            <Button type="button" onClick={() => handleAdd()}>
              <Plus />
            </Button>
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

export function PollsCards(props) {
  const [spin, setSpin] = useState(false);
  const [redirect, setRedirect] = useState(0);
  const Rd = () => {
    if (redirect === 1) return <Redirect to="/" />;
    return null;
  };
  const CheckActive = () => {
    if (props.active === 1 && props.done === 0) return pollsOption(false);
    else return pollsOption(true, "secondary");
  };
  const pollsOption = (x, y) => {
    return (
      <Container className="polls-options">
        {props.options.map((data, indx) => {
          const optionVote = async () => {
            setSpin(true);
            await votePolls(data.option, props.id);
            Swal.fire("<h4>Voted</h4>", "Redirect to Home", "success").then(
              () => {
                setRedirect(1);
              }
            );
          };
          return (
            <React.Fragment>
              {spin && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {!spin && (
                <Button
                  onClick={optionVote}
                  variant={y}
                  className="each-option"
                  key={indx}
                  disabled={x}
                >
                  {data.option}
                  <p style={{ fontSize: "1.5vh" }}>{data.votes}</p>
                </Button>
              )}
            </React.Fragment>
          );
        })}
      </Container>
    );
  };
  return (
    <div>
      <Rd />
      <Alert variant="info" style={{ borderRadius: "0px" }}>
        <Alert.Heading className="alert-date">{props.date}</Alert.Heading>
        <hr />
        <h2 className="alert-head">{props.question}</h2>
        <hr />
        <CheckActive />
        <hr />
      </Alert>
    </div>
  );
}
