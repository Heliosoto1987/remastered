//vendor
import React from "react";
//Router
import { Redirect, Route, Switch } from "react-router-dom";
//Screens
import { Container } from "../navbar/container";
import { UserScreen } from "../screens/userScreen/UserScreen";
import { ThanksScreen } from "../screens/thanksScreen/ThanksScreen";
import { AboutScreen } from "../screens/aboutScreen/AboutScreen";
import { ResumeScreen } from "../screens/resumenScreen/ResumeScreen";
import { GiphyScreen } from "../screens/giphyScreen/GiphyScreen";
import { ContacScreen } from "../screens/contacScreen/ContacScreen";
import { ProjectScreen } from "../screens/proyectScreen/ProjectScreen";
import { TodoAppScreen } from "../screens/todoScreen/TodoAppScreen";
import { StarsWarScren } from "../screens/starsScreen/StarsWarScreen";

export const DashBoardRouters = () => {
  return (
    <>
      <Container />
      <Switch>
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/thanks" component={ThanksScreen} />
        <Route exact path="/resume" component={ResumeScreen} />
        <Route exact path="/todoapp" component={TodoAppScreen} />
        <Route exact path="/giphy" component={GiphyScreen} />
        <Route exact path="/stars" component={StarsWarScren} />
        <Route exact path="/user" component={UserScreen} />
        <Route exact path="/contact" component={ContacScreen} />
        <Route exact path="/projects" component={ProjectScreen} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};
