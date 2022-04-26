import React, { Component } from "react";

class Clock extends Component {
    constructor(props){ 
        super(props); 
        
        this.state = { 
            currentTime: new Date(),
        }; 
    } 
    
    componentDidMount() {
        setInterval(this.updateTime, 1000); 
    } 
    updateTime = () => {
        this.setState({currentTime: new Date()});
    };
    render() {
        return (
            <div>
                <h2>Clock</h2>
                <h3>{this.state.currentTime.toString()}</h3>
            </div>
        )
    }
}
export default Clock;