import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';

const Playstation = () => (
  <div>
    <h1>Playstation</h1>
  </div>
);

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/playstation' component={Playstation} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
