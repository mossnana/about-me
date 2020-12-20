import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFoundContainer } from "./containers/notfound.container";

const PublicRoutes: React.FC = (props): any => {
  return (
    <Router>
      {props.children}
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <p>Hello Home route</p>
        </Route>
        {/* Login */}
        <Route exact path="/login">
          <p>Hello Login route</p>
        </Route>
        {/* Not Found */}
        <Route component={NotFoundContainer} />
      </Switch>
    </Router>
  );
};

const PrivateRoutes: React.FC = (props) => {
  return (
    <>
      {props.children}
      <Router>
        <Switch>
          <Route exact path="/">
            <p>Not Impremented Yet</p>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const Routers = (props: any): any => {
  const isBypass: boolean = false;
  if (isBypass) return PrivateRoutes;
  return PublicRoutes(props);
};

export default Routers;
