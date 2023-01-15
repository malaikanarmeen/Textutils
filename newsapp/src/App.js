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
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
   pageSize =15;

   state = {
    progress:0

   }
   setProgress = (progress)=>{
    this.setState({progress: progress})
   }
   render() {
     
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      
        <Switch>
          <Route exact path="/"><News setProgress=  {this.setProgress}   key="general"   pageSize={this.pageSize} country="ma" category="General"/></Route>
          <Route exact path="/business"><News setProgress=  {this.setProgress}   key="Business"  pageSize={this.pageSize} country="ma" category="Business"/></Route>
          <Route exact path="/entertainment"><News setProgress=  {this.setProgress}   key="Entertainment"  pageSize={this.pageSize} country="ma" category="Entertainment"/></Route>
          <Route exact path="/general"><News setProgress=  {this.setProgress}   key="General"  pageSize={this.pageSize} country="ma" category="General"/></Route>
          <Route exact path="/health"> <News setProgress=  {this.setProgress}   key="Health "  pageSize={this.pageSize} country="ma" category="Health"/></Route>
          <Route exact path="/science"> <News setProgress=  {this.setProgress}   key="Science"  pageSize={this.pageSize} country="ma" category="Science"/></Route>
          <Route exact path="/sports"><News setProgress=  {this.setProgress}   key="Sports"  pageSize={this.pageSize} country="ma" category="Sports"/></Route>
          <Route exact path="/technology"> <News setProgress=  {this.setProgress}   key="Technology"  pageSize={this.pageSize} country="ma" category="Technology"/></Route>


        </Switch>
        </Router>
      </div>
    )
  }
}
