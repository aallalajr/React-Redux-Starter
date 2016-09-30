import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import OrgsPage from './components/org/OrgsPage';
import ManageOrgPage from './components/org/ManageOrgPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="orgs" component={OrgsPage} />
    <Route path="org" component={ManageOrgPage} />    
    <Route path="org/:id" component={ManageOrgPage} />    
    <Route path="about" component={AboutPage} />
  </Route>  
);