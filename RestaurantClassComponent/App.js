import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import RestaurantList from "./Components/RestaurantList";
import RestaurantCreate from "./Components/RestaurantCreate";
import RestaurantUpdate from "./Components/RestaurantUpdate";
import RestaurantSearch from "./Components/RestaurantSearch";
import Login from "./Components/Login";
import LogOut from "./Components/LogOut";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/restaurantlist" element={<RestaurantList/>} />
          <Route path="/restaurantcreate" element={<RestaurantCreate/>} />
          <Route path="/restaurantupdate/:id" render={props =>(<RestaurantUpdate {...props} />)} element={<RestaurantUpdate/>}/>
          <Route path="/restaurantsearch" element={<RestaurantSearch/>} />
          <Route path="/login" render={props =>(<Login {...props}/>)}element={<Login/>} />
          <Route path="/logout" element={<LogOut/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
