import React, {Component} from 'react';

export default class Input extends Component {
constructor() {
  super();
  this.state = {
    input: ""
};
 
}
handleChange(value){
  this.setState({
    input: value
  });
}
  render() {
    return (
      <div className="App">
      <input type="text" onChange={e => this.handleChange(e.target.value)} />
      <p>{this.state.message}</p>
      </div>
    );
  }
}