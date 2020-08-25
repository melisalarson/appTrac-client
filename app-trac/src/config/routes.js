import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Company from '../components/ApplicationStatus/ApplicationStatus'
import CompanyContainer from '../pages/Company/CompanyCntr/CompanyCntr'

import JobListCntr from '../pages/Job/JobListCntr/JobListCntr'
import JobContainer from "../pages/Job/JobCntr/JobCntr"

import ConnectionContainer from "../pages/Connection/ConnectionCntr/ConnectionCntr"

import Home from "../components/zApplicationDetails/Home"


export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/companies/:id" component={CompanyContainer} />
      <Route exact path="/companies/:id/edit" component={CompanyContainer} />
      <Route exact path="/companies/new" component={CompanyContainer} />

      <Route exact path="/connections" component={ConnectionContainer} />



      {/* <Route exact path="/companies" component={CompanyListContainer} /> */}
      <Route
        exact
        path="/applicationdetails/:id"
        component={CompanyContainer}
      />

      <Route exact path="/jobs" component={JobListCntr} />

      <Route exact path="/jobs/:id" component={JobContainer} />

      <Route path="/applicationlist" component={Company} />
    </Switch>
  );
}