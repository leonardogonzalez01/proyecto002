import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/store';
import Users from "./Users";
import User from "./User";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Users}/>
          <Route exact={true} path='/user/:id' component={User}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
