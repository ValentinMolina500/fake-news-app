import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Home" component={ResultsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <div id="Page">
      <div id="Float">
        <div>Fake News Detection</div>
        <div>
          <input name="Query"></input>
          <input type="Submit"></input>
        </div>
      </div>
    </div>
  );
}

function ResultsPage() {
  return (
    <div id="Page">
      Hello World! 123
    </div>
  );
}

export default App;
