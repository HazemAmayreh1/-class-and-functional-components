import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const { name, message } = this.props;
    return (
      <div>
        <h1>Hello ,{name}</h1>
        <p> this is message ,{message}</p>
      </div>
    );
  }
}

export default Greeting;
