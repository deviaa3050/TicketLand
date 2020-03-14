import React from "react";
import "./header.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Grid,
  Form,
  Modal,
  Button,
  ButtonToolbar,
  Nav,
  Navbar,
  Dropdown
} from "react-bootstrap";
import { MdAccountCircle, MdDesktopWindows } from "react-icons/md";

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { register, login } from "../../_action/auth";

class Header extends React.Component {
  // const [show, setShow] = useState(false);

  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "male",
      phone: "",
      address: ""
    };
  }
  // const handleClose = () => setShow(false);
  handleCloseLogin = () => {
    this.setState({ showLogin: false });
  };

  handleCloseRegister = () => {
    this.setState({ showRegister: false });
  };
  // const handleShow = () => setShow(true);
  handleShowLogin = () => {
    this.setState({ showLogin: true });
  };

  handleShowRegister = () => {
    this.setState({ showRegister: true });
  };

  handleLogin = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const data = { username, password };
    console.log("data login handle", data);
    this.props.login(data);
  };

  handleRegister = e => {
    e.preventDefault();
    const name = this.state.name;
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const gender = this.state.gender;
    const phone = this.state.phone;
    const address = this.state.address;
    const datas = { name, username, email, password, gender, phone, address };
    console.log("data register handle", datas);
    this.props.register(datas);
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const username = localStorage.getItem("username");
    const { authenticated } = this.props.auth;
    const token = localStorage.getItem("token");
    console.log(username, "hlo");

    return (
      <Navbar className="navbar">
        {!token ? <Redirect to="/"></Redirect> : ""}
        <Navbar.Brand href="#">
          <p className="title">TicketLand</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {authenticated === false ? (
              <ButtonToolbar>
                <Button className="login" onClick={this.handleShowLogin}>
                  Login
                </Button>
                <Modal
                  show={this.state.showLogin}
                  onHide={this.handleCloseLogin}
                  className="our_modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="login_header">Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="modal_form">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="username"
                          className="fillLogin"
                          name="username"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="fillLogin"
                          name="password"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>
                      <Link to="/dashboard">
                        <button
                          type="submit"
                          className="modal_button"
                          onClick={this.handleLogin}
                        >
                          Login
                        </button>
                      </Link>
                    </Form>
                  </Modal.Body>
                </Modal>

                <span />
                <Button className="register" onClick={this.handleShowRegister}>
                  register
                </Button>
                <Modal
                  show={this.state.showRegister}
                  onHide={this.handleCloseRegister}
                  className="our_modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="registerHeader">Register</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="modal_form">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          className="fillLogin"
                          name="name"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          className="fillLogin"
                          name="username"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="fillLogin"
                          name="email"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="fillLogin"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formGender">
                        <Form.Control
                          as="select"
                          name="gender"
                          onChange={this.handleChange}
                        >
                          <option value="male">Male</option>
                          <option value="female">female</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          className="fillLogin"
                          name="phone"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          className="fillLogin"
                          size="lg"
                          name="address"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>

                      <Link to="/dashboard">
                        <button
                          type="submit"
                          className="modal_button"
                          onClick={this.handleRegister}
                        >
                          Register
                        </button>
                      </Link>
                    </Form>
                  </Modal.Body>
                </Modal>
              </ButtonToolbar>
            ) : (
              <h4>
                <Dropdown>
                  <Dropdown.Toggle variant="success" className="login">
                    <MdAccountCircle />
                    {username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/ticket">My Ticket</Link>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-2">
                      <Link to="/payment">Payment</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </h4>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data)),
    register: datas => dispatch(register(datas))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
