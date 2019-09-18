import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import * as ROUTES from '../../constants/routes.js';
import NavBar from '../NavBar';
import Home from '../Home';
import Healthy from '../Healthy';
import Sustainable from '../Sustainable';
import Affordable from '../Affordable';
import Fair from '../Fair';
import Footer from '../Footer';
// import Table from "../Table"
import PageHeader from '../PageHeader';

class App extends Component {
  constructor(){
    super()
    firebase.initializeApp({
      apiKey: "AIzaSyDotqscj0pdXzEKwC0p44dT2vYtITVD6Y8",
      authDomain: "lafpc-food-dashboard.firebaseapp.com",
      databaseURL: "https://lafpc-food-dashboard.firebaseio.com",
      projectId: "lafpc-food-dashboard",
      storageBucket: "",
      messagingSenderId: "893039884595",
      appId: "1:893039884595:web:f2d0987d63330d530ea646"
    })
    this.db = firebase.database()
    this.state = {
      activeHeader: '',
      masterSheet: [],
      activeDetails: [] 
      // {
      //   healthyValue: [],
      //   sustainableValue: [],
      //   affordableValue: [],
      //   fairValue: []
      // }
    }
  }

  componentDidMount(){
    const msRef = this.db.ref("masterSheet")
    msRef.on("value", snapshot => {
        this.setState({
          masterSheet: snapshot.val()
          // {
          //   healthyValue: [healthyVal],
          //   sustainableValue: [sustainableVal],
          //   affordableValue: [affordableVal],
          //   fairValue: [fairVal]
          // }
        }, () => console.log(this.state.masterSheet, 'masterSheet in state'))
    })
  }
  activeStateSetsInfo = (activeHeader) => {
    if (this.state.activeHeader === 'HEALTHY') {
      this.setState({
        activeDetails: this.state.masterSheet[0]
      }, () => console.log(this.state.activeDetails, 'this.state.activeDetails'))
      }
    else if (this.state.activeHeader === 'SUSTAINABLE') {
      this.setState({
        activeDetails: this.state.masterSheet[1]
      }, () => console.log(this.state.activeDetails, 'this.state.activeDetails'))
        }
    else if (this.state.activeHeader === 'AFFORDABLE') {
      this.setState({
        activeDetails: this.state.masterSheet[2]
        }, () => console.log(this.state.activeDetails, 'this.state.activeDetails'))
      }
    else {
          this.setState({
            activeDetails: this.state.masterSheet[3]
            }, () => console.log(this.state.activeDetails, 'fairValue'))
    }
  }
  handleValueClick = (e) => {
    this.setState({
      activeHeader: e.target.innerText
    }, () => {
      console.log(this.state.activeHeader, "activeHeader")
      this.activeStateSetsInfo(this.state.activeHeader)
    })
  }

  render() {
    return (
      <div>
        <PageHeader />
        <NavBar 
          handleValueClick={this.handleValueClick}
          activeHeader={this.state.activeHeader}
          />
        <Switch>
          <Route 
            exact path={ROUTES.HOME} 
            component= { Home } />
          <Route 
            exact path={ROUTES.HEALTHY_CONTAINER} 
            component= {() => <Healthy
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.activeDetails}
              />} />
          <Route 
            exact path={ROUTES.SUSTAINABLE_CONTAINER} 
            component= {() => <Sustainable
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.activeDetails}
              />} />
          <Route 
            exact path={ROUTES.AFFORDABLE_CONTAINER} 
            component= {() => <Affordable
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.activeDetails}
              />} />
          <Route 
            exact path={ROUTES.FAIR_CONTAINER} 
            component= {() => <Fair
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.activeDetails}
              />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}


export default withRouter(App);
