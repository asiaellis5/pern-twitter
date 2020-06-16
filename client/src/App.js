import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "./components/LogInPage/loginPage";
import HomePage from "./components/HomePage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LogInPage} exact />
        <Route path="/" component={HomePage} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
