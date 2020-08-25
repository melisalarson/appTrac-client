import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Application from '../components/Application/HomeApplication'
import ApplicationDetails from '../components/zApplicationDetails/ApplicationDetails'
import Company from '../components/ApplicationStatus/ApplicationStatus'
import CompanyContainer from '../pages/Company/CompanyCntr/CompanyCntr'
import CompanyListContainer from "../pages/Company/CompanyListCntr/CompanyListCntr";
import ApplicationList from '../components/Application/ApplicationList'

import JobListCntr from '../pages/Job/JobListCntr/JobListCntr'
import JobContainer from "../pages/Job/JobCntr/JobCntr";


export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Application} />
      <Route exact path="/companies" component={CompanyListContainer} />

      {/* pick one of the routes below */}
      <Route exact path="/applicationdetails" component={ApplicationDetails} />
      <Route exact path="/companies/:id"
        component={CompanyContainer}
      />

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