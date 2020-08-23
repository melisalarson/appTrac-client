import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Application from '../components/Application/Application'
import ApplicationDetails from '../components/zApplicationDetails/ApplicationDetails'

export default () => {
  return(
    <Switch>
      <Route exact path='/' component={ Application } />
      <Route path="/applicationdetails" components={ApplicationDetails} />
    </Switch>
  )
}