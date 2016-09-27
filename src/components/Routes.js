import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Homepage from './Homepage/Homepage';
import Page404 from './Page404';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      {/* }<Route path="login" component={Login} /> */}
      <Route path="*" component={Page404} />
    </Route>
  </Router>
);

export default Routes;
