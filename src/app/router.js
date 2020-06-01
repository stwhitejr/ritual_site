import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from '@root/app/app';

const AppRouter = () => (
  <Router basename="/dev">
    <Switch>
      <Route
        path="/about"
        render={props => <App {...props} displayHeader={true} page="about" />}
      />
      <Route
        path="/classes"
        render={props => <App {...props} displayHeader={true} page="classes" />}
      />
      <Route
        path="/store"
        render={props => <App {...props} displayHeader={true} page="store" />}
      />
      <Route
        path="/contact"
        render={props => <App {...props} displayHeader={true} page="contact" />}
      />
      <Route path="/" render={props => <App {...props} page="home" />} />
    </Switch>
  </Router>
)

export default AppRouter;
