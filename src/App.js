import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { Exchanges } from "./Components/exchanges";
import { Learn } from "./Components/learn";
import Currency from "./Components/currency";
import { Add } from "./Components/add";
import { View } from "./Components/view";
import { Update } from "./Components/update";
import { LogRegister } from "./Components/LogRegister";

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false
//"https://api.coinstats.app/public/v1/coins?skip=0"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="grey" variant="dark">
            <Navbar.Brand href="/home">Cryptonia</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/exchanges">Exchanges</Nav.Link>
              <Nav.Link href="/learn">About Crypto</Nav.Link>
              <Nav.Link href="/add">Add Crypto</Nav.Link>
              <Nav.Link href="/view">View portfolio</Nav.Link>
              <Nav.Link href="/LogRegister">Login/Register</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          <Route>
            <Route path="/" component={Currency} exact />
            <Route path="/home" component={Currency} exact />
            <Route path="/exchanges" component={Exchanges} exact />
            <Route path="/learn" component={Learn} exact />
            <Route path="/add" component={Add} />
            <Route path="/view" component={View} />
            {<Route path="/update" component={Update} />}
            <Route path="/LogRegister" component={LogRegister} />
          </Route>
        </div>
      </Router>
    );
  }
}
export default App;
