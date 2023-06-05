import React, {Component} from "react";
import Layout from "../Layout/Layout";

class User extends Component {
    userName = {
        name: "Jack",
        salary: 35000,
        image : "https://th.bing.com/th/id/OIP.6k0AX50lG_TPWTcSN90VEQHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    }

    render() {
        return(
            <div>
                <h5>User Component</h5>
                <hr/>
                <Layout employee={this.userName} />
            </div>
        )
    }
}

export default User;
