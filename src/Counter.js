import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }
}

export default Counter;
