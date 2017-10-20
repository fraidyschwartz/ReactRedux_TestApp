import React, { Component } from 'react';
import PeoplePage from './People/PeoplePage';
import ManagePeoplePage from './People/ManagePeoplePage';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PeoplePage}/>          
        <Route path="/People" component={PeoplePage}/>          
        <Route path="/Person" component={ManagePeoplePage} exact/>          
        <Route path="/Person/:id" component={ManagePeoplePage}/>          
      </div>
    );
  }
}

export default App;
