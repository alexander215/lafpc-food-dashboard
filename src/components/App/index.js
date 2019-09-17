import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import * as ROUTES from '../../constants/routes.js';
import NavBar from '../NavBar';
import Home from '../Home';
import Healthy from '../Healthy';
import Sustainable from '../Sustainable';
import Affordable from '../Affordable';
import Fair from '../Fair';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div>
          <h1>
            LA Food Council Platform
          </h1>
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.HOME} component= { Home } />
          <Route exact path={ROUTES.HEALTHY_CONTAINER} component= { Healthy } />
          <Route exact path={ROUTES.SUSTAINABLE_CONTAINER} component= { Sustainable } />
          <Route exact path={ROUTES.AFFORDABLE_CONTAINER} component= { Affordable } />
          <Route exact path={ROUTES.FAIR_CONTAINER} component= { Fair } />
        </Switch>
        <Footer />
      </div>
    )
  }
}


export default withRouter(App);
