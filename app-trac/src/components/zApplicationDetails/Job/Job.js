import React from 'react';
import { Link } from "react-router-dom";
import JobModel from '../../../models/jobModel';


const Job = (props) => {
  let { job, companyId } = props;
  console.log('props in job.js =', props)
  
  let applicationDate = new Date(job.applicationDate).toDateString();
  let nextStepsDate = new Date(job.nextStepsDate).toDateString();
  return (
    <>
      <div className="buttons">
        <Link to={`/companies/${companyId}/jobs/${job._id}/edit`}>
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
