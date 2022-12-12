import React from "react";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Success from "./components/Success/Success";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/Task-Project"
          element={<Welcome />}
        />
        <Route
          path="/Task-Project/signup"
          element={<Signup />}
        />
        <Route
          path="/Task-Project/success"
          element={<Success />}
        />
      </Routes>
    </div>
  );
};

export default App;
