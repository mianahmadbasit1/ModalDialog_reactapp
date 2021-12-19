import React from "react";
import Button from "../Button";
import Container from "../container";
import "./ErrorModel.css";
const ErrorModel = (props) => {
  return (
    <div className="backdrop" onClick={props.onClose}>
      <Container className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className="content">{props.content}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Container>
    </div>
  );
};

export default ErrorModel;
