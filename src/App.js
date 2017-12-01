import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="">Link</NavItem>
        <NavItem eventKey={2} href="">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="">Link Right</NavItem>
        <NavItem eventKey={2} href="">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


class App extends Component {
  render() {
    const headerInstance = (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );

    const jumbotronInstance = (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    );

    const introInstance = (
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    );

    return (
      <div className="App">
      
        {navbarInstance}
        { headerInstance }
        { jumbotronInstance }
        { introInstance }

      </div>
    );
  }
}



export default App;
