import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ETForm from "./Components/ET/ETForm";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/ET" element={<ETForm/>} />
        </Routes>
      </Router>
      </>
    )
  }
}

export default App;