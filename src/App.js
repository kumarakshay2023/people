import React, { Component } from 'react';
import './App.css';
import Slider from './pages/Slider';
import {Friends} from './pages/Friends';
import { Switch , Route } from 'react-router-dom';
import { Header } from './component/header/header';


class App extends Component {
  render() {

    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component= {Slider}></Route>
          <Route exact path='/friends' component= {Friends}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;


