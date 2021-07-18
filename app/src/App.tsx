import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Register from './components/form/Register';
import Login from './components/form/Login';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;
