import React, { Component } from "react";

export class App02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleIncrement = () => {
    // ko dc phep thay doi chinh no phai thong qua ham set
    // this.setState({ count: this.state.count + 1 });
    this.state((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    // this.state.count-- -> sai
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App02;
