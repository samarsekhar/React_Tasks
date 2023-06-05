import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0,
    };

    incrHandler = () => {
        console.log(this.state.counter);
        this.setState({ counter: this.state.counter + 1});
        this.forceUpdate();
    };
    decrHandler = () => {
        console.log(this.state.counter);
        this.setState({ counter: this.state.counter - 1});
    };

    render(){
        console.log("Test Case 123");
        return (
            <React.Fragment>
                <h1>Counter Value: {this.state.counter}</h1>
                <button className="btn btn-success" onClick={this.incrHandler}>+</button>
                <button className="btn btn-danger" onClick={this.decrHandler}>-</button>
            </React.Fragment>
        );
    }
};

export default Counter;