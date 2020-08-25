import React from 'react';

// import '../ApplicationDetails.css';

let nextStepsList = [
  "Review Company/ Review Opportunities",
  "Prepare For Phone Screen",
  "Prepare For Phone Interview",
  "Complete Assignment",
  "Prepare for Interview",
  "Accept/Decline Offer",
  "Ask For Feedback",
  "None/ N/A",
];

const Job = (props) => {
  let { job } = props;
  let applicationDate = new Date(job.applicationDate).toDateString();
  let nextStepsDate = new Date(job.nextStepsDate).toDateString();
  console.log(nextStepsList)
  // console.log("props in job.js =", props);
  return (
    <div className="content-wrapper-jobs">
      <section className="job-A">
        <a href={job.jobURL} target="_blank">{job.jobTitle}</a>
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
  );
};

export default Job;
