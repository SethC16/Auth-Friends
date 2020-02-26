import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './component/PrivateRoute';
import LoginForm from './Forms/LoginForm';
import NewFriend from './Forms/NewFriend';
import './App.css';

function App(props) {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
          <Link to='/login'>Login</Link>
          </li>
          <li>
          <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={NewFriend} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
