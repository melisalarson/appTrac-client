import React from 'react';

// import '../ApplicationDetails.css';


const Job = (props) => {
  let { job } = props;
  console.log("props in job.js =", props);
  return (
    <div className="content-wrapper-jobs">
      <section className="job-A">
        {job.applicationDate}
        <br />
        {job.applicationStatus}
        <br />
        {job.nextSteps}
        <br />
        {job.nextStepsDate}
      </section>
      <section className="job-B">
        {job.jobTitle}
        <br />
        {job.jobURL}
        <br />
        {job.jobLocation}
        <br />
        {job.jobDescription}
      </section>
      <section className="job-C">
        {job.jobNotes}
      s</section>
    </div>
  );
};

export default Job;
