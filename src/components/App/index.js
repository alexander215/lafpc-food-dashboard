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
      masterSheet: {
        healthyValue: [],
        sustainableValue: [],
        affordableValue: [],
        fairValue: []
      }
    }
  }

  componentDidMount(){
    // const msRef = this.db.ref("masterSheet")
    // msRef.on("value", snapshot => {
    //     this.setState({
    //       masterSheet: snapshot.val()
    //       // {
    //       //   healthyValue: [healthyVal],
    //       //   sustainableValue: [sustainableVal],
    //       //   affordableValue: [affordableVal],
    //       //   fairValue: [fairVal]
    //       // }
    //     }, () => console.log(this.state.masterSheet, 'masterSheet in state'))
    // })
    // // 
  }

  handleValueClick = (e) => {
    this.setState({
      activeHeader: e.target.innerText
    }, () => {
      const msRef = this.db.ref("masterSheet")
        const healthyVal = msRef.child("0")
        const sustainableVal = msRef.child("1")
        const affordableVal = msRef.child("2")
        const fairVal = msRef.child("3")
      if (this.state.activeHeader === 'HEALTHY') {
            healthyVal.on("value", snapshot => {
                this.setState({
                  masterSheet: {
                    healthyValue: snapshot.val()
                  }
                }, () => console.log(this.state.masterSheet.healthyValue, 'healthyValue'))
                })
          }
          if (this.state.activeHeader === 'SUSTAINABLE') {
            sustainableVal.on("value", snapshot => {
                this.setState({
                  masterSheet: {
                    sustainableValue: snapshot.val()
                  }
                }, () => console.log(this.state.masterSheet.sustainableValue, 'sustainableValue'))
              })
          }
          if (this.state.activeHeader === 'AFFORDABLE') {
            affordableVal.on("value", snapshot => {
              this.setState({
                masterSheet: {
                  affordableValue: snapshot.val()
                }
              }, () => console.log(this.state.masterSheet.affordableValue, 'affordableValue'))
            })
          }
          if (this.state.activeHeader === 'FAIR') {
            fairVal.on("value", snapshot => {
                this.setState({
                  masterSheet: {
                    fairValue: snapshot.val()
                  }
                }, () => console.log(this.state.masterSheet.fairValue, 'fairValue'))
            })
          }
    })
  }


  render() {
    return (
      <div class="total-container">
        <div class="total-content">
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
              valueDetails={this.state.masterSheet.healthyValue}
              />} />
          <Route 
            exact path={ROUTES.SUSTAINABLE_CONTAINER} 
            component= {() => <Sustainable
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.masterSheet.sustainableValue}
              />} />
          <Route 
            exact path={ROUTES.AFFORDABLE_CONTAINER} 
            component= {() => <Affordable
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.masterSheet.affordableValue}
              />} />
          <Route 
            exact path={ROUTES.FAIR_CONTAINER} 
            component= {() => <Fair
              activeHeader={this.state.activeHeader}
              handleValueClick={this.handleValueClick}
              valueDetails={this.state.masterSheet.fairValue}
              />} />
        </Switch>
          </div> 
            <div class="sticky-footer">
              <Footer />
            </div>
      </div>
    )
  }
}


export default withRouter(App);
