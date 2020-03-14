import React from "react";
import "./ticket.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Card } from "react-bootstrap";

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import Header from "../header/header";
import { modalTicket } from "./modal";

class Ticket extends React.Component {
  render() {
    return (
      <>
        <Header />

        <div id="title">
          <h1 id="ticketTitle">My Ticket</h1>
          <Card id="ticketCard">
            <div id="backTitle">
              <h4 id="tagTitle">TicketLand</h4>
            </div>
            <div className="row" id="rows">
              <div className="col-md-3" className="columnTicket">
                <h4 id="trainName">Dharmawangsa</h4>
                <h6 id="trainType">Executive</h6>
                <Alert variant="warning" className="alert">
                  Pending
                </Alert>
                <h5 className="idNumber">ID Number</h5>
                <h6 className="idNumberFill">3578165610970001</h6>
              </div>
              <div className="col-md-2" className="columnTicket">
                <div className="row">
                  <div id="imgFromTo">
                    <img src={require("../../img/fromto.jpg")} id="fromto" />
                  </div>
                  <div id="dataFromTo">
                    <h6 id="departureTrain"> 10:00:00</h6>
                    <h6 id="arrivalTrain">15:00:00</h6>
                  </div>
                </div>
                <h5 className="idNumber">Name</h5>
                <h6 className="idNumberFill">Paman</h6>
              </div>
              <div className="col-md-2" className="columnTicket">
                <h5 id="fromTrain">Surabaya Gubeng</h5>
                <h5 id="toTrain">Gambir</h5>
                <h5 className="phoneNumber">Phone</h5>
                <h6 className="phoneNumberFill">081234567</h6>
              </div>
              <div className="col-md-2" className="columnTicket">
                <h5 className="emailUser">Email</h5>
                <div className="emailUserFill">paman@gmail.com</div>
              </div>
              <div className="col-md-3" className="columnTicket">
                <h4>Train's Ticket</h4>
                <modalTicket />
              </div>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Ticket;
