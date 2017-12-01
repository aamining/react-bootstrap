import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';

// import TodoItem from './TodoItem'

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
        { headerInstance }
        { jumbotronInstance }
        { introInstance }
      </div>
    );
  }
}

// export default calss App extends React.Component {
// constructor(props) {
//   super(props);
//   this.state={ items:[
//     {description:"First", completed true},
//     {description: "Second", completed false},
//   ]}
// }

// export default class App extends React.Component {
//   render() {
//     return(
//       <div>
//       items.map((item,index)=> (
//         <TodoItem{...item} key={index}/>
//       )
//         <TodoItem description="First"/>
//         <TodoItem description="Second" completed/>
//       </div>
//     )
//   }
// }

export default App;
