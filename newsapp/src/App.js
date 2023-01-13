import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
     
    return (
      <div>
        <Router>
        <NavBar/>
      
        <Switch>
          <Route exact path="/"><News key="general"   pageSize={5} country="ma" category="general"/></Route>
          <Route exact path="/business"><News key="Business"  pageSize={5} country="ma" category="Business"/></Route>
          <Route exact path="/entertainment"><News key="Entertainment"  pageSize={5} country="ma" category="Entertainment"/></Route>
          <Route exact path="/general"><News key="General"  pageSize={5} country="ma" category="General"/></Route>
          <Route exact path="/health"> <News key="Health "  pageSize={5} country="ma" category="Health"/></Route>
          <Route exact path="/science"> <News key="Science"  pageSize={5} country="ma" category="Science"/></Route>
          <Route exact path="/sports"><News key="Sports"  pageSize={5} country="ma" category="Sports"/></Route>
          <Route exact path="/technology"> <News key="Technology"  pageSize={5} country="ma" category="Technology"/></Route>


        </Switch>
        </Router>
      </div>
    )
  }
}
