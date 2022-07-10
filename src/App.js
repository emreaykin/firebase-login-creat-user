import "./style.css";
import "./module.js";
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
function App() {
  return (
    <div className="form">
      <div className="form-toggle"></div>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
