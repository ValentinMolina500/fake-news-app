import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  BrowserRouter,
  withRouter
} from 'react-router-dom';
import SummaryPage from "./SummaryPage/SummaryPage";
import Input from './utils/claim';

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      claim: '',
    }
  }

  handleInput = e => {
    this.setState({
      claim: e.target.value
    })
  }

  render() {
    return (
      <div id="main-wrapper">
        <div id="first-section">
          <h1 id="main-heading">Fake News Detection</h1>
        </div>
        <div id="second-section">
          <div>
            <input id="main-input" value={this.state.claim} onChange={this.handleInput} placeholder="Enter your claim"></input>
            <button id="submit-button" onClick={() =>  {
              Input.setClaim(this.state.claim)
              let q = this.state.claim.trim();
             
                this.props.history.push('/summary')
      
              }}>Tell me the truth</button>
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