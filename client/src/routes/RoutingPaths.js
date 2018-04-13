import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Switch } from "react-router";

import LiveChartsPage from "./LiveCharts/LiveCharts";
import DownloadPage from "./Download/Download";
import ThresholdPage from "./Threshold";
import StartPage from "./Start/Start";


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