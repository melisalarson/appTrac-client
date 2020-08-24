import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Application from '../components/Application/Application'
import ApplicationDetails from '../components/zApplicationDetails/ApplicationDetails'
import Company from '../components/ApplicationStatus/ApplicationStatus'
import CompanyContainer from '../pages/Company/CompanyCntr/CompanyCntr'
import CompanyListContainer from "../pages/Company/CompanyListCntr/CompanyListCntr";


export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Application} />
      <Route exact path="/companies" component={CompanyListContainer} />

      <Route exact path="/applicationdetails" component={ApplicationDetails} />

      <Route exact path="/companies/:id" component={CompanyContainer} />
      <Route exact path="/applicationdetails/:id" component={CompanyContainer} />

      {/* <Route path="/companies/edit" components={} />
      <Route path="/companies/delete" components={} />
      <Route path="/jobs/add" components={} />
      <Route path="/jobs/edit" components={} />
      <Route path="/jobs/delete" components={} />
      <Route path="/connections/add" components={} />
      <Route path="/connections/edit" components={} />
      <Route path="/connections/delete" components={} /> */}

      <Route path="/applicationstatus" component={Company} />
    </Switch>
  );
}