//combines two operations
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class CryptoItem extends React.Component {
  //constructor to bind
  constructor() {
    super();

    this.DeleteCrypto = this.DeleteCrypto.bind(this);
  }

  //delete crypto method that logs to console
  DeleteCrypto(e) {
    e.preventDefault();
    console.log("Delete: " + this.props.crypto._id);

    //axios calls delete method and calls http url
    axios
      .delete("http://localhost:4000/api/crypto/" + this.props.crypto._id)
      .then(() => {
        this.props.ReloadData();
      })
      .catch();
  }

  render() {
    //returns some text
    return (
      //div is used in HTML to make divisions of content in the web page
      <div>
        {/* //Card Header from bootstrap makes app look neater */}
        <Card>
          <Card.Body>
            <blockquote className="blockquote">
              <img
                src={this.props.crypto.poster}
                width="150"
                height="150"
              ></img>
              <br></br>
              <footer className="blockquote-footer">
                <p>{this.props.crypto.title}</p>
                <p>{this.props.crypto.quantity}</p>
                <p>{this.props.crypto.email}</p>
              </footer>
            </blockquote>
          </Card.Body>
          {/* link helps change url of application */}
          <Link
            to={"/update/" + this.props.crypto._id}
            className="btn btn-primary"
          >
            Update Crypto
          </Link>
          {/* red delete button, goes to server and envokes route point */}
          <Button variant="danger" onClick={this.DeleteCrypto}>
            Delete crypto
          </Button>
        </Card>
      </div>
    );
  }
}
