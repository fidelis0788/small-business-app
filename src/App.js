import React from 'react';
import Navigation from './Containers/Navigation';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;