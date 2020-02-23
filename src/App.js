import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  BrowserRouter,
  withRouter
} from 'react-router-dom';
import SummaryPage from "./SummaryPage/SummaryPage";

class AppComponent extends React.Component {

  render() {
    return (
      <div id="main-wrapper">
        <div id="first-section">
          <h1 id="main-heading">Fake News Detection</h1>
        </div>
        <div id="second-section">
          <div>
            <input id="main-input" placeholder="Enter your claim"></input>
            <button id="submit-button" onClick={() =>  console.log(this.props.history.push('/summary'))}>Tell me the truth</button>
          </div>
  
        </div>
      </div>
    )
  }

}
function App() {
  return (
    <div>
      <BrowserRouter>
  
        <Switch>
          <Route exact path="/summary" component={SummaryPage} />
          <Route exact path="/" component={withRouter(AppComponent)} />
          <Route path="/" component={withRouter(AppComponent)} />
        </Switch>
        </BrowserRouter>
    </div>

  )
}

export default App;