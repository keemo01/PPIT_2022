import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export class LogRegister extends React.Component {
  constructor() {
    super();

    // Bindings
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.onChangeLogInEmail = this.onChangeLogInEmail.bind(this);
    this.onChangeLogInPassword = this.onChangeLogInPassword.bind(this);
    this.handleRegSubmit = this.handleRegSubmit.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    // used by React to represent information about the components current situation
    this.state = {
      loginEmail: "",
      loginPassword: "",
      firstName: "",
      surname: "",
      email: "",
      password: "",
    };
  }

  // When the user tries to login
  handleLoginSubmit(event) {
    // Alert the user
    alert(
      "Email: " +
        this.state.loginEmail +
        "\nPassword: " +
        this.state.loginPassword
    );
    // stops website from crashing after reloading
    event.preventDefault();

    // Defining new user object
    const user = {
      loginEmail: this.state.loginEmail,
      loginPassword: this.state.loginPassword,
    };

    // Sending post request to the server
    axios
      .post("http://localhost:4000/login", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // When registering a new user
  handleRegSubmit(event) {
    // Alert user
    alert(
      "First Name: " +
        this.state.firstName +
        "\nSurname: " +
        this.state.surname +
        "\nEmail: " +
        this.state.email +
        "\nPassword: " +
        this.state.password
    );
    // stops website from crashing after reloading
    event.preventDefault();

    // Defining new user object
    const newUser = {
      firstName: this.state.firstName,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
    };

    // Sending post request to the server
    axios
      // send newUser to server
      .post("http://localhost:4000/register", newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // set state to empty for the next user
    this.setState({
      firstName: "",
      surname: "",
      email: "",
      password: "",
    });
  }

  // will change logEmail value
  onChangeLogInEmail(event) {
    this.setState({
      loginEmail: event.target.value,
    });
  }

  // will set logPassword value
  onChangeLogInPassword(event) {
    this.setState({
      loginPassword: event.target.value,
    });
  }

  // will change firstName value
  onChangeFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  // will set surname value
  onChangeSurname(event) {
    this.setState({
      surname: event.target.value,
    });
  }

  // will set email value
  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  // will set password value
  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <Container className="login-container">
        <Row>
          <Col>
            <div>
              {/* create login form */}
              <form onSubmit={this.handleLoginSubmit}>
                <h3>Login</h3>

                {/* input login email */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={this.state.loginEmail}
                    onChange={this.onChangeLogInEmail}
                  />
                </div>

                {/* input login password */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={this.state.loginPassword}
                    onChange={this.onChangeLogInPassword}
                  />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Sign in
                </button>
              </form>
            </div>
          </Col>
          <Col>
            {/* create register form */}
            <form onSubmit={this.handleRegSubmit}>
              <h3>Register</h3>

              {/* input first name */}
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                />
              </div>

              {/* input surname */}
              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={this.state.surname}
                  onChange={this.onChangeSurname}
                />
              </div>

              {/* input email */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>

              {/* input password */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>

              <button type="submit" className="btn btn-lg btn-dark btn-block">
                Register
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
