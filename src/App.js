import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/LoginAndSignUp/Register";
import Reset from "./Components/LoginAndSignUp/Reset";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
