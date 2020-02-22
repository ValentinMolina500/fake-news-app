import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

// You can choose your kind of history here (e.g. browserHistory)
//import { Router} from 'react-router';
// Your routes.js file
//import routes from './route.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
