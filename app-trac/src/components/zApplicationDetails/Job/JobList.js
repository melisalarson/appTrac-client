import React from "react";
import Job from "./Job";


function JobList(props) {
  let jobList=[];

  if (props.jobs) {
    jobList = 
    props.jobs.map((Obj) => {
      return <Job key={Obj._id} job={Obj} />;
    });
  }
  // else no jobs blah 

  return <div className="jobs-container">{jobList}</div>;
}

export default JobList;
