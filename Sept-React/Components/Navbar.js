import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    React - Page
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/ET" className="nav-link">Expense Tracker</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;