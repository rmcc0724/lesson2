import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//Creates a new ConfigureStore object and stores it into <store> which contains all the the JS objects and props

const store = ConfigureStore();


class App extends Component {

  render() {
      return (
        
//Send the store object to the Provider component in an object also named <store>, which allows the <Redux Store> to be available to all components

        <Provider store={store}>
          <BrowserRouter>
      <div className="App">
        <Main />
      </div>
          </BrowserRouter>
          </Provider>
    );
  }
}

export default App;
