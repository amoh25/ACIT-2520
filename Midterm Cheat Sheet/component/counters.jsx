import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
        {id:1, value: 2},
        {id:2, value: 0},
        {id:3, value: 1},
        {id:4, value: 0}
    ]
};

Delete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({counters});
}

render() {
  return (
    <div>
    {this.state.counters.map((counter) => ( 
    <Counter 
        key={counter.id} 
        onDelete={this.Delete} 
        value={counter.value} 
        id={counter.id} 
    > 
        <h3>Counter #{counter.id}</h3> 
    </Counter> ))}
    </div>
  );
}
  format() {
    const {value} = this.state; // descruturing
    return value === 0? "1": value;
  }
}
export default Counters;