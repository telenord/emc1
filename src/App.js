import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
