import React from 'react';

// import '../ApplicationDetails.css';


const Job = (props) => {
  let { jobs } = props;
  console.log("props in job.js =", props);
  return (
    <h1>{jobs}</h1>
    // <div className="content-wrapper-jobs">
    //   <section className="job1">
    //     {applicationDate}
    //     <br />
    //     {applicationStatus}
    //     <br />
    //     {nextSteps}
    //     <br />
    //     {nextStepsDate}
    //   </section>
    //   <section className="job2">
    //     {jobTitle}
    //     <br />
    //     {jobURL}
    //     <br />
    //     {jobLocation}
    //     <br />
    //     {jobDescription}
    //   </section>
    //   <section className="job3">{jobNotes}</section>
    // </div>
  );
};

export default Job;
