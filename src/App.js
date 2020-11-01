import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/LoginPage/login';
import Main from './components/MainPage/main';
import '../src/styles/main.scss';

class App extends React.Component {

  render() {
    return (<BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Main} />
    </BrowserRouter>);
  }
}

export default App;