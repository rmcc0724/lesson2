import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  //////////////////////////////////////////////////////////////////////////////////////
  /* Render the Navbar */

  render() {
      return (
          <BrowserRouter>
      <div className="App">
        <Main />
      </div>
          </BrowserRouter>

    );
  }

  //////////////////////////////////////////////////////////////////////////////////////
}

export default App;
