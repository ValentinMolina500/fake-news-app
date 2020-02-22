import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class Response {
  Claim
  Analysis
  Articles = new Array()
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Results" component={ResultsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <div id="Page">
      <div id="Float">
        <div id="Float-Title">Fake News Detection</div>
        <div id="Float-Query">
          <input name="Query"></input>
        </div>
        <div id="Float-Query">
          <Link to="ResultsPage" ></Link>
        </div>
      </div>
    </div>
  );
}

function ResultsPage() {
  var Test = new Response;
  Test.Claim = "Are ghosts real?"
  Test.Analysis = "FALSE"
  Test.Articles = new Array("https://www.google.com", "https://yahoo.com");

  return (
    <div id="Page">
      <div id="Claim">{Test.Claim}</div>
      <div id="Analysis">{Test.Analysis}</div>
      <div id="Articles">
        {
          (Test.Articles).length
        }
      </div>
    </div>
  );
}

export default App;
