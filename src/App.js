import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./views/Home";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
