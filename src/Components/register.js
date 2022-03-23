import React from "react";
import { axios } from "axios";

export class Register extends React.Component {
  //constructor to bind
  constructor(props) {
    super(props);

    // used by React to represent information about the components current situation
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registration_errors: "",
    };

    //provides the scripts data to be executed whenever the submit event is occurred
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //handleChange function is to set a new state for input
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //receive the form data if form validation is successful.
  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    //post request
    axios
      .post(
        "http://localhost:4000/register",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      //handling promise
      .then((res) => {
        //function passes res
        console.log("registration res", res);
      })
      //handling promise
      .catch((error) => {
        //function passes error
        console.log("registration error", error);
      });
    // cancels the event if it is cancelable
    event.preventDefault();
  }

  //turns website code into the interactive pages users see
  render() {
    //returns some text
    return (
      //div is used in HTML to make divisions of content in the web page //jsx code
      <div>
        <form onSubmit={this.handleSubmit}>
          {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            //onchange attributes fires the moment the value of the element is changed
            onChange={this.handleChange}
            required
          />

          {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            //onchange attributes fires the moment the value of the element is changed
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
