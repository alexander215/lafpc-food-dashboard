import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import firebase from 'firebase';
import * as ROUTES from '../../constants/routes.js';
import NavBar from '../NavBar';
import Home from '../Home';
import Healthy from '../Healthy';
import Sustainable from '../Sustainable';
import Affordable from '../Affordable';
import Fair from '../Fair';
import Footer from '../Footer';
import Table from "../Table"

class App extends Component {
  constructor(props){
    super(props)
    firebase.initializeApp({
      apiKey: "AIzaSyDotqscj0pdXzEKwC0p44dT2vYtITVD6Y8",
      authDomain: "lafpc-food-dashboard.firebaseapp.com",
      databaseURL: "https://lafpc-food-dashboard.firebaseio.com",
      projectId: "lafpc-food-dashboard",
      storageBucket: "",
      messagingSenderId: "893039884595",
      appId: "1:893039884595:web:f2d0987d63330d530ea646"
    })
  }

  render() {
    return (
      <div>
          <h1>
            LA Food Council Platform
          </h1>
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.HOME} component= { Home } />
          {/* <Table db={firebase}/> */}
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
