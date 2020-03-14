import React, { useState } from "react";
import "./modal.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Grid,
  Row,
  Form,
  Modal,
  Button,
  Card,
  CardGroup,
  Dropdown,
  DropdownButton,
  ButtonToolbar,
  Nav,
  Navbar,
  Table
} from "react-bootstrap";
import { IoMdTrain, IoIosPerson } from "react-icons/io";
import { FaBaby, FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineSwap } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
// import { Right } from "react-bootstrap/lib/Media";

import { connect } from "react-redux";
import { getTrain, getAllTrain } from "../../_action/train";

import Header from "../header/header";

// class modalTicket extends React.Component {
//   render() {
//     return gf;
//   }
// }
// export default modalTicket;

const modalTicket = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button className="login" id="pay" onClick={handleShow}>
        Pay Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

render(<modalTicket />);
