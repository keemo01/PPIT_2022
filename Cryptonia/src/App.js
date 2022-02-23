import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Exchanges } from './Components/exchanges';
import { Portfolio } from './Components/portfolio';
import { Learn } from './Components/learn';
import Currency from './Components/currency';
import { Login } from './Components/login';
import Register from './Register';


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
              <Nav.Link href="/crypto">Cryptocurrencies</Nav.Link>
              <Nav.Link href="/exchanges">Exchanges</Nav.Link>
              <Nav.Link href="/portfolio">Porfolio</Nav.Link>
              <Nav.Link href="/learn">About Crypto</Nav.Link>
              <Nav.Link href="/login">Login and Register</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          <Switch>
            <Route path='/home' component={Currency/*page to be added.*/} />
            <Route path='/crypto' component={Currency} />
            <Route path='/exchanges' component={Exchanges} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/learn' component={Learn} />
            <Route path='/login' component={Login} />

          </Switch>
        </div>
      </Router>
    );
  }
} export default App;