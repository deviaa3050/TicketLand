import React from "react";
import "./payment.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Card } from "react-bootstrap";
import { TiWarning } from "react-icons/ti";

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import Header from "../header/header";

class Payment extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div id="title">
          <h1 id="ticketTitle">Invoice</h1>
          <div className="row" id="rowPayment">
            <div className="col-md-8">
              <Alert variant="warning" className="alertPayment">
                <p>
                  <h5>
                    <TiWarning id="warnPayment" />
                  </h5>
                  Please do pay by transfering using m-banking, e-banking, or
                  ATM transfer
                </p>
                <p>to 0981231231</p>
              </Alert>
              <Card id="cardPayment">
                <div id="backTitle">
                  <h4 id="tagTitle">TicketLand</h4>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p className="idNumberPayment">ID Number</p>
                    <p className="idNumberFillPayment">3578165610970001</p>
                  </div>
                  <div className="col-md-3">
                    <p className="idNumberPayment">className</p>
                    <p className="idNumberFillPayment">Paman</p>
                  </div>
                  <div className="col-md-3">
                    <p className="idNumberPayment">Phone</p>
                    <p className="idNumberFillPayment">0891234567</p>
                  </div>
                  <div className="col-md-3">
                    <p className="idNumberPayment">Email</p>
                    <p className="idNumberFillPayment">paman@gmail.com</p>
                  </div>
                </div>
              </Card>
              <h1 style={{ position: "relative", bottom: "5px" }}>Details</h1>
              <div className="row-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <Card>
                      <Card.Body>
                        <div className="row">
                          <div className="col-md-6">Dharmawangsa [1]</div>
                          <iv className="col-md-6">Rp300.000</iv>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <div className="row">
                          <div className="col-md-6">Total</div>
                          <iv className="col-md-6">Rp300.000</iv>
                        </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col-md-6">Heres to Upload</div>
                </div>
              </div>
              <div className="row-md-4">
                <button className="login">Pay Now</button>
              </div>
            </div>
            <div className="col-md-4">helo</div>
          </div>
        </div>
      </>
    );
  }
}
export default Payment;
