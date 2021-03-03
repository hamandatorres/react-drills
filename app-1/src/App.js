import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }


render() {
  return (
    <Input />
  )
}
}

export default App;
