import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Home" component={ResultsPage} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      Hello World!
    </div>
  );
}

function ResultsPage() {
  return (
    <div>
      Hello World! 123
    </div>
  );
}

export default App;
