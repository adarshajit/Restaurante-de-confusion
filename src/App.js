import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';


class App extends Component{
  

  render(){
  return (
    <BrowserRouter>
    <div>
      <Main />
    </div>
    </BrowserRouter>
  );
  }
}


export default App;
