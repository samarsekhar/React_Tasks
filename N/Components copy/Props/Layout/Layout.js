import React, {Component} from "react";

class Layout extends Component {
    render() {
        return (
            <div>
                <h5>Layout Component</h5>
                <pre>{JSON.stringify(this.props)}</pre>
                <img src={this.props.employee.image} />
                <h5>Name: {this.props.employee.name}</h5>
                <h6>Salary: {this.props.employee.salary}</h6>
            </div>
        )
    }
}

export default Layout;