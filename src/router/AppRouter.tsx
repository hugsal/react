import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom';
import { ContactDetailScreen } from '../containers/ContactDetailScreen';
import { ContactListScreen } from '../containers/ContactListScreen';

export const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactListScreen} />
        <Route exact path="/detail/:id" component={ContactDetailScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
