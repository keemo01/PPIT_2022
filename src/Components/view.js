//combines two operations
import React from "react";
import axios from "axios";
import { Crypto } from "./crypto";
import "../App.css";

export class View extends React.Component {
  //gets called for delete event
  constructor() {
    super();

    this.ReloadData = this.ReloadData.bind(this);
  }

  //store data to be used in class
  state = {
    crypto: [],
  };

  //component life cycle method //gets called when component is active
  componentDidMount() {
    //axios is promise based http client
    axios
      .get("http://localhost:4000/api/crypto")
      //fullfilled state
      .then((response) => {
        this.setState({ crypto: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //gathers crypto in database
  ReloadData() {
    //axios is promise based http client
    axios
      .get("http://localhost:4000/api/crypto")
      //fullfilled state
      .then((response) => {
        this.setState({ crypto: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //returns some text
    return (
      //div is used in HTML to make divisions of content in the web page
      <div className="portfolio-app">
        <h3>Your Portfolio</h3>
        {/* jsx */}
        <Crypto
          crypto={this.state.crypto}
          ReloadData={this.ReloadData}
        ></Crypto>
      </div>
    );
  }
}
