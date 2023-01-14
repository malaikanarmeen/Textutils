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
   pageSize =15;
  render() {
     
    return (
      <div>
        <Router>
        <NavBar/>
      
        <Switch>
          <Route exact path="/"><News key="general"   pageSize={this.pageSize} country="ma" category="General"/></Route>
          <Route exact path="/business"><News key="Business"  pageSize={this.pageSize} country="ma" category="Business"/></Route>
          <Route exact path="/entertainment"><News key="Entertainment"  pageSize={this.pageSize} country="ma" category="Entertainment"/></Route>
          <Route exact path="/general"><News key="General"  pageSize={this.pageSize} country="ma" category="General"/></Route>
          <Route exact path="/health"> <News key="Health "  pageSize={this.pageSize} country="ma" category="Health"/></Route>
          <Route exact path="/science"> <News key="Science"  pageSize={this.pageSize} country="ma" category="Science"/></Route>
          <Route exact path="/sports"><News key="Sports"  pageSize={this.pageSize} country="ma" category="Sports"/></Route>
          <Route exact path="/technology"> <News key="Technology"  pageSize={this.pageSize} country="ma" category="Technology"/></Route>


        </Switch>
        </Router>
      </div>
    )
  }
}
