import React from "react";

function Header() {
    return(
        <div>
            <nav className="nav">
                <div className="nav-left">
                    <a className="brand" href="/">
                        Tasker
                    </a>
                </div>
                <div className="nav-right">
                    <div className="tabs">
                        <a href="/">Component</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;