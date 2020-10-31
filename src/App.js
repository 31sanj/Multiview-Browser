import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/MainPage/main';
import Login from './components/LoginPage/login';
import '../src/styles/main.scss';


class App extends React.Component {


  render() {
    return (<BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>);
  }
}

export default App;