import React, {Component} from "react";

class Message extends Component {
    state = {
        msg: "Hello, Mr: X",
    };

    GMHandler = () => {
        console.log(this.state.msg);
        this.setState({ msg: "Hello, Mr SS Good Morning..."});
        // this.state.msg = "Hello, Mr SS Good Moorning";
        console.log(this.state.msg)
    };
    GAHandler = () => {
        console.log(this.state.msg);
        this.setState({ msg: "Hello, Mr SS Good Afternoon..."});
    };
    GNHandler = () => {
        this.setState({ msg: "Hello, Mr SS Good Night..."});
    };

    render() {
        return (
            <div>
                <h2>Message:{this.state.msg}</h2>
                <button className="btn btn-success" onClick={() => {this.GMHandler()}}>Click1</button>
                <button className="btn btn-primary" onClick={this.GAHandler}>Click2</button>
                <button className="btn btn-info" onClick={this.GNHandler}>Click3</button>
            </div>
        )
    }
};

export default Message;