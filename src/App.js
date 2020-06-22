import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import ApiExample from './ApiExample'
import Login from './views/Login.js'
import Events from './views/Events.js'

import './App.css'

function App() {
  return (
    <Router className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/events">Events</Link>
        <Link to="/api">API Example</Link>
      </nav>
      <Switch>
        <ProtectedRoute path="/events">
          <Events />
        </ProtectedRoute>
        <Route path="/api">
          <ApiExample />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
