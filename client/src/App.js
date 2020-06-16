import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "./components/LogInPage/loginPage";
import HomePage from "./components/HomePage/homePage";
import PrimaryPage from "./components/PrimaryPage/primaryPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
