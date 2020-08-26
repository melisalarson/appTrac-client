import React from 'react';
import { Link } from "react-router-dom";
// import JobForm from './JobForm';
import JobModel from '../../../models/jobModel';

// import '../ApplicationDetails.css';

const Job = (props) => {
  let { job } = props;
  
  let applicationDate = new Date(job.applicationDate).toDateString();
  let nextStepsDate = new Date(job.nextStepsDate).toDateString();
  // console.log("props in job.js =", props);
  return (
    <>
      <div className="buttons">
        <Link to={`/jobs/${job._id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/jobs/${job._id}/delete`}>
          <button >
            Delete
          </button>
        </Link>
      </div>
      <div className="content-wrapper-jobs">
        <section className="job-A">
          <a href={job.jobURL} target="_blank">
            {job.jobTitle}
          </a>
          <br />
          {job.jobLocation}
          <br />
          Applied On: {applicationDate}
          <br />
          Next Steps: {job.nextSteps}
          <br />
          {job.applicationStatus} on {nextStepsDate}
        </section>
        <section className="job-B">{job.jobDescription}</section>
        <section className="job-C">{job.jobNotes}</section>
      </div>
      {/* <JobForm companyId={props.companyId} /> */}
    </>
  );
};

export default Job;
