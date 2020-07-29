import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import TinderCards from './components/TinderCards'
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards/>
          </Route>
          <Route path="/chat">
            <h1>this is the chat page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
