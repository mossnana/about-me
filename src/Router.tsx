import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const PublicRoutes: React.FC = (props) => {
  return (
    <Router>
      {props.children}
      <Route exact path="/" />
    </Router>
  );
};

const PrivateRoutes: React.FC = (props) => {
  return (
    <Router>
      {props.children}
      <Route exact path="/" />
    </Router>
  );
}

const Routers = () => {
  const isBypass: boolean = true
  if(isBypass) return PrivateRoutes
  return PublicRoutes
}

export default Routers