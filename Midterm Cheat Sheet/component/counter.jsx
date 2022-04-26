import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
};

add = () =>{
  this.setState({value: this.state.value + 1})
}

subtract = () =>{
  this.setState({value: this.state.value - 1})
}
render() {
  let classes = "badge m-2 badge-";
  classes += this.state.value === 0 ? "warning": "primary";
  return (
    <div>
      {this.props.children}
      <span className={classes}>{this.format()}</span>
        <button 
        className="btn ttn-secondary btn-sm"
        onClick={this.add}>
          +
        </button>
        <button 
        className="btn ttn-secondary btn-sm"
        onClick={this.subtract}>
          -
        </button>
        <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => this.props.onDelete(this.props.id)}>
          Delete
        </button>
    </div>
  );
}
  format() {
    const {value} = this.state; // descruturing
    return value === 0? "1": value;
  }
}
export default Counter;
