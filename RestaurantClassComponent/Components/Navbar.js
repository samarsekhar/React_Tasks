import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome,faList,faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return(
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                Restaurant
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home"> <FontAwesomeIcon icon={faHome} />Home</Link>
                    </li>
                   <li className="nav-item">
                       <Link className="nav-link" to="/restaurantlist"><FontAwesomeIcon icon={faList}/>List</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link" to="/restaurantcreate"><FontAwesomeIcon icon={faPlus}/>Create</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link" to="/restaurantupdate/:id">Update</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link" to="/restaurantsearch"><FontAwesomeIcon icon={faSearch}/>Search</Link>
                   </li>
                   <li className="nav-item">
                   {
                       localStorage.getItem('login') ?
                       <Link className="nav-link" to="/logout"><FontAwesomeIcon icon={faUser}/>Logout</Link>
                       :
                       <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUser}/>Login</Link>
                   }
                   </li>
                </ul>
            </div>
        </nav>
        </div>
    )
};

export default Navbar;