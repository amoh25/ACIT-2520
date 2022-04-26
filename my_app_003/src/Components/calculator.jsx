import React, { Component, useState } from "react";


class Calculator extends Component {
    constructor(){
        state =  "0"
    };

    ClickHandler(e){
        const clicked = (e.target.name)
        
        if(clicked = "="){
            this.calc()
        }
        else if(clicked == "AC"){
            this.clear()
        }
        else if(clicked = "CE"){
            this.deleteOne()
        }
        else{
            this.setState(this.state + clicked.value)
        }
    }
    
    calc = () => {
        const answer = Math.evaluate(this.state);
        this.setState(answer.toString())
    }
    
    clear = () => {
        this.setState("0")
    }

    deleteOne = () => {
        this.state(this.state.slice(0, -1))
    }
    


    render(){
        return (
            <div className="calculator">
                <div id = "display">
                    {this.state}
                </div>  
                <div className="layout">
                    <div id="row 1">
                        <button name="AC" onClick={this.ClickHandler} value={"AC"}>"AC"</button>
                        <button name="CE" onClick={this.ClickHandler} value={"CE"}>CE</button>
                        <button name="%" onClick={this.ClickHandler} value={"%"}>%</button>
                        <button name="÷" onClick={this.ClickHandler} value={"÷"}>÷</button>
                    </div>
                    <div id="row2">
                        <button name="7" onClick={this.ClickHandler} value={"7"}>7</button>
                        <button name="8" onClick={this.ClickHandler} value={"8"}>8</button>
                        <button name="9" onClick={this.ClickHandler} value={"9"}>9</button>
                        <button name="X" onClick={this.ClickHandler} value={"*"}>X</button>   
                    </div>
                    <div id="row3">
                        <button name="4" onClick={this.ClickHandler} value={"4"}>4</button>
                        <button name="5" onClick={this.ClickHandler} value={"5"}>5</button>
                        <button name="6" onClick={this.ClickHandler} value={"6"}>6</button>
                        <button name="-" onClick={this.ClickHandler} value={"-"}>-</button>                       
                    </div>
                    <div id="row4">
                        <button name="1" onClick={this.ClickHandler} value={"1"}>1</button>
                        <button name="2" onClick={this.ClickHandler} value={"2"}>2</button>
                        <button name="3" onClick={this.ClickHandler} value={"3"}>3</button>
                        <button name="+" onClick={this.ClickHandler} value={"+"}>+</button>     
                    </div>
                    <div id="row5">
                        <button name="0" onClick={this.ClickHandler} value={"0"}>0</button>
                        <button name=" " > </button>
                        <button name="." onClick={this.ClickHandler} value={"."}>.</button>
                        <button name="="onClick={this.ClickHandler} value={"="}>=</button>     
                    </div>

                </div>   
            </div>
        );
    }
}

export default Calculator

