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
          path="/task-project"
          element={<Welcome />}
        />
        <Route
          path="/task-project/signup"
          element={<Signup />}
        />
        <Route
          path="/task-project/success"
          element={<Success />}
        />
      </Routes>
    </div>
  );
};

export default App;
