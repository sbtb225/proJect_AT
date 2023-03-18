import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import PrivateRoute, { AuthProvider } from './PrivateRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
            </Switch>
          </header>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
