import React from "react";
import "./App"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import RestaurantCreate from "./Components/RestaurantCreate";
import RestaurantList from "./Components/RestaurantList";
import RestaurantSearch from "./Components/RestaurantSearch";
import RestaurantUpdate from "./Components/RestaurantUpdate";
import Login from "./Components/Login";
import LogOut from "./Components/LogOut";


function App() {
    return (
        <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/list" element={<RestaurantList/>}/>
                <Route path="/create" element={<RestaurantCreate/>}/>
                <Route path="/search" element={<RestaurantSearch/>}/>
                <Route path="/update/:id" element={<RestaurantUpdate/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<LogOut/>}/>
            </Routes>
        </Router>
    </div>
    );
}

export default App;