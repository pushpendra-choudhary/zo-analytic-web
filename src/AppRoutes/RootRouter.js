import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../Modules/Auth/Containers/Auth';
import Analytic from '../Modules/Analytic/Containers/Analytic';





class RootRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/analytics" component={Analytic} />
        </Switch>
      </Router>)
  }
}

export default RootRouter;