import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicPage from "./Layouts/PublicPage";
import ProtectedPage from "./Layouts/ProtectedPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/public" component={PublicPage} />
        <Route exact path="/protected" component={ProtectedPage} />
        <Route path="*" component={() => "Page not found 404"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
