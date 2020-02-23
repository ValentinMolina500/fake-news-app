import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { fireEvent } from '@testing-library/react';

class Response {
  Claim
  Analysis
  Articles = new Array()
  ArticleCount
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
    <div id="HomePage">
      <div id="Float">
        <div id="Float-Title">Fake News Detection</div>
        <div id="Float-Query">
          <input name="Query"></input>
        </div>
        <div id="Float-Query">
          <a href="./Results"><button>Analyze</button></a>
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
  Test.ArticleCount = 2;

  return (
    <div id="ResultsPage">
      <div className="Card">
        <div className="Card-Title">Claim</div>
        <div className="Card-Content">"{Test.Claim}"</div>
      </div>
      <div className="Card">
        <div className="Card-Title">Analysis</div>
        <div className="Card-Content">{Test.Analysis}</div>
      </div>
    </div>
  );
}

export default App;
