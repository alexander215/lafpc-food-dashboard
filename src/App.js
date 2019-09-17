import React, { Component } from 'react';
import firebase from 'firebase';
import Table from "./components/Table"

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
  render(){
    return (
      <div className="App">
        <div>
          <h1>App</h1>
          <Table db={firebase}/>
        </div>
      </div>
    );
  }
}

export default App;
