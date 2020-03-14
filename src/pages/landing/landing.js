import React from "react";
import "./landing.css";

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

class Landing extends React.Component {
  componentDidMount() {
    this.props.getAllTrain();
  }

  constructor() {
    super();

    this.state = {
      from: "",
      to: "",
      dateStart: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  Cari = e => {
    e.preventDefault();
    this.props.getTrain();
  };

  // handleKeypress(e) {
  //   const characterCode = e.key;
  //   if (characterCode === "Backspace") return;

  //   const characterNumber = Number(characterCode);
  //   if (characterNumber >= 0 && characterNumber <= 9) {
  //     if (e.currentTarget.value && e.currentTarget.value.length) {
  //       return;
  //     } else if (characterNumber === 0) {
  //       e.preventDefault();
  //     }
  //   } else {
  //     e.preventDefault();
  //   }
  // }

  render() {
    const { data } = this.props.train;
    console.log("ini data", data);
    // const content = this.state.checked ? (
    //   <div>
    //     <h6 id="fromDate">Tanggal Kembali</h6>
    //     <Form.Control
    //       className="fill"
    //       id="fromFillDate"
    //       type="date"
    //     ></Form.Control>
    //   </div>
    // ) : null;
    return (
      <div className="App">
        <Header />
        <br />
        <br />
        <br />
        <div className="tagLine">
          <h1>Selamat Pagi, Tiket Seekers</h1>
          <Card>
            <Card.Img
              className="promo"
              src={require("../../img/KAI.jpg")}
            ></Card.Img>
          </Card>
          <div className="supportLine">
            Ingin Pulkam Dengan Good Deal?
            <br />
            Masuk atau Daftar Sekarang !!
          </div>
        </div>

        <Card id="thisCard">
          <Row>
            <Col md="4" id="leftCard">
              <div className="cardHeader">
                <IoMdTrain id="train" />
                <h6 className="tagTrain">Tiket Kereta Api</h6>
              </div>
            </Col>
            <Col md="8" id="leftCardBody">
              <Form>
                <Row>
                  <div id="form1">
                    <h6>From</h6>
                    <Form.Control
                      type="text"
                      placeholder="Gubeng"
                      className="fill"
                      onChange={this.handleChange}
                      name="from"
                      id="from"
                    ></Form.Control>
                    <h6>Date</h6>
                    <Form.Control
                      className="fill"
                      type="date"
                      name="dateStart"
                      id="dateStart"
                      onChange={this.handleChange}
                    ></Form.Control>
                    {/* {["checkbox"].map(type => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`Pulang Pergi`}
                          name={`pp`}
                          checked={this.state.checked}
                          onChange={this.handleChange}
                        />
                      </div>
                    ))} */}
                  </div>
                </Row>
                <Row>
                  <div className="swap">
                    <AiOutlineSwap id="swapIcon" />
                  </div>
                </Row>
                <Row>
                  <h6 id="targetCity">To</h6>
                  <Form.Control
                    type="text"
                    placeholder="Gambir"
                    className="fill"
                    onChange={this.handleChange}
                    id="to"
                    name="to"
                  ></Form.Control>
                  {/*<h6 id="adult">Dewasa</h6>
                  <IoIosPerson id="adultIcon" />
                   <Form.Control
                    id="adultFill"
                    type="number"
                    onKeyDown={this.handleKeypress}
                    min="0"
                    step="1"
                  ></Form.Control>
                  <h6 id="baby">Bayi</h6>
                  <FaBaby id="babyIcon" />
                  <Form.Control
                    id="babyFill"
                    type="number"
                    onKeyDown={this.handleKeypress}
                    min="0"
                    step="1"
                  ></Form.Control> */}
                  <button onClick={e => this.Cari(e)} id="submitSearch">
                    Search
                  </button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>

        <div id="table">
          <Table responsive>
            <thead>
              <tr>
                <th>Train's Name</th>
                <th>Departure</th>
                <th />
                <th>Arrival</th>
                <th>Duration</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {!data
                ? ""
                : data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <p className="main">{item.trainName}</p>
                        <p className="side">{item.type.className}</p>
                      </td>
                      <td>
                        <p className="main">{item.departure}</p>
                        <p className="side">{item.from}</p>
                      </td>
                      <td>
                        <FaLongArrowAltRight />
                      </td>
                      <td>
                        <p className="main">{item.arrival}</p>
                        <p className="side">{item.to}</p>
                      </td>
                      <td>
                        <p className="main">5j 5m</p>
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <TiShoppingCart />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { train: state.train };
};

const mapDispatchToProps = dispatch => {
  return {
    getTrain: () => dispatch(getTrain()),
    getAllTrain: () => dispatch(getAllTrain())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
