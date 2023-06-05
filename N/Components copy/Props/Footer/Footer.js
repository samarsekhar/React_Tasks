import React, { Component } from "react";

class Footer extends Component {
    render() {
        let { name, salary} = this.props;

        return(
            <div>
                <pramod>{JSON.stringify(this.props)}</pramod>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <h4>Employee Name:{this.props.name}</h4>
                <h5>Employee Salary:{this.props.salary}</h5>
                <h6>......................</h6>
                <h4>Employee Name:{name}</h4>
                <h5>Employee Salary:{salary}</h5>
            </div>
        )
    }
}

export default Footer;