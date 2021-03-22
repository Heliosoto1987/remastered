//vendor
import React from "react";
//reactRouter
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Dashboard
import { DashBoardRouters } from "./DashBoardRouters";
//Screens
import { LoginScreen } from "../screens/loginScreen/LoginScreen";
//styles
import "../styles/approuter.css";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashBoardRouters} />
        </Switch>
      </div>
    </Router>
  );
};
