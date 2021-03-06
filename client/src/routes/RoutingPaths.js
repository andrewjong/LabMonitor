import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Switch } from "react-router";

import LiveChartsPage from "./LiveChartsPage";
import DownloadPage from "./DownloadPage";
import ThresholdPage from "./ThresholdPage";
import StartPage from "./StartPage";


const RoutingPaths = (extraProps) => (
  <Switch>
    <Route exact path="/" render={(props) => (
      <LiveChartsPage {...props} nodes={extraProps.nodes} />
    )} />
    <Route exact path="/download" render={(props) => (
      <DownloadPage {...props} nodes={extraProps.nodes} />
    )} />
    <Route exact path="/threshold" component={ThresholdPage} />
    <Route exact path="/start" component={StartPage} />
  </Switch>
)

export default RoutingPaths