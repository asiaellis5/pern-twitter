import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "./components/LogInPage/loginPage";
import HomePage from "./components/HomePage/homePage";
import PrimaryPage from "./components/PrimaryPage/primaryPage";
import SignUpPage from "./components/SignUpPage/signUpPage";
import PrivateRoute from './private-route'
import Navigation from "./components/Navigation/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <PrivateRoute path="/home" component={HomePage} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
