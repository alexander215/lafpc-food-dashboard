import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import * as ROUTES from '../../constants/routes.js';
import Home from '../Home';
import Healthy from '../Healthy';
import Sustainable from '../Sustainable';
import Affordable from '../Affordable';
import Fair from '../Fair';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.HOME} component= { Home } />
          <Route exact path={ROUTES.HEALTHY_CONTAINER} component= { Healthy } />
          <Route exact path={ROUTES.SUSTAINABLE_CONTAINER} component= { Sustainable } />
          <Route exact path={ROUTES.AFFORDABLE_CONTAINER} component= { Affordable } />
          <Route exact path={ROUTES.FAIR_CONTAINER} component= { Fair } />
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
