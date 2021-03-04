import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image url={"https://www.wikihow.com/images/d/d1/Be-Nice-to-Your-Cat-Step-5.jpg"} />>
      </div>
    )
  }
}

export default App;
