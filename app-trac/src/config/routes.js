import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../components/zApplicationDetails/Home"
// import ApplicationDetails from "../components/zApplicationDetails/ApplicationDetails"

import CompanyContainer from '../pages/Company/CompanyCntr/CompanyCntr'
import EditCompanyCntr from "../pages/Company/CompanyCntr/EditCompanyCntr";
import NewCompanyCntr from "../pages/Company/CompanyCntr/NewCompanyCntr";
import CompanyDelete from "../components/zApplicationDetails/Company/CompanyDelete.js";
import CompanyListCntr from "../pages/Company/CompanyListCntr/CompanyListCntr"

import EditJobCntr from "../pages/Job/JobCntr/EditJobCntr";
import NewJobCntr from "../pages/Job/JobCntr/NewJobCntr";
import JobDelete from "../components/zApplicationDetails/Job/JobDelete.js";
import JobListCntr from '../pages/Job/JobListCntr/JobListCntr'

import EditConnectionCntr from "../pages/Connection/ConnectionCntr/EditConnectionCntr";
import NewConnectionCntr from "../pages/Connection/ConnectionCntr/NewConnectionCntr";
import ConnectionDelete from "../components/zApplicationDetails/Connection/ConnectionDelete.js";
import ConnectionListCntr from '../pages/Connection/ConnectionListCntr/ConnectionListCntr';

import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Logout from "../components/Auth/Logout";

export default ({ currentUser, setCurrentUser }) => {
  return (
    <Switch>
      {/* <Route path="/jobs/details/:jobid" render={({ match }) => <JobDetails match={match} currentUser={currentUser} history={history} />} /> */}
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" component={ApplicationDetails} /> */}

      {/* COMPANY COMPANY COMPANY COMPANY COMPANY COMPANY COMPANY COMPANY COMPANY COMPANY */}
      <Route exact path="/companies/new" component={NewCompanyCntr} />
      <Route exact path="/companies/:id" component={CompanyContainer} />
      <Route exact path="/companies/:id/edit" component={EditCompanyCntr} />
      <Route exact path="/companies/:id/delete" component={CompanyDelete} />
      <Route exact path="/companies" component={CompanyListCntr} />

      {/* JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB JOB */}
      <Route exact path="/companies/:co_id/jobs/:id/edit" component={EditJobCntr} />
      <Route exact path="/companies/:co_id/jobs/new" component={NewJobCntr} />
      <Route exact path="/jobs/:id/delete" component={JobDelete} />
      <Route exact path="/jobs" component={JobListCntr} />

      {/* CONNECTION CONNECTION CONNECTION CONNECTION CONNECTION CONNECTION CONNECTION CONNECTION */}
      <Route exact path="/companies/:co_id/connections/:id/edit" component={EditConnectionCntr} />
      <Route exact path="/companies/:co_id/connections/new" component={NewConnectionCntr} />
      <Route exact path="/connections/:id/delete" component={ConnectionDelete} />
      <Route exact path="/connections" component={ConnectionListCntr} />

      <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
      <Route path='/register' component={Register} />
      <Route path='/logout' component={Logout} />
    </Switch>
  );
}
