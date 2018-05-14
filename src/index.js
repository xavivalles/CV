import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import App from './Containers/App/App';
// import About from './Containers/About/About';
import { reducers } from './Redux/reduxRoot';

const store = createStore(reducers, window.__data, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = createHistory();
const syncHistory = syncHistoryWithStore(history, store);

const component = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/About" component={About} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>
);

// Wrap existing app in Provider
ReactDOM.render(component, document.getElementById('root'));
