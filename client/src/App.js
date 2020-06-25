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
  const [auth, setAuth] = useState(false)
  const [username, setUsername] = useState("")

  return (
    <BrowserRouter>
      <Navigation auth={auth} />
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/login" render={(props) => (
          <LogInPage {...props} auth={setAuth} username={setUsername} />
        )} exact />
        <Route path="/signup" render={(props) => (
          <SignUpPage {...props} auth={setAuth} username={setUsername} />
        )} exact />
        <PrivateRoute path="/home" component={HomePage} username={username} auth={auth} setAuth={setAuth} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
