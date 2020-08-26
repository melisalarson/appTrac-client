import React from "react";
import Job from "./Job";


function JobList(props) {
  let jobList=[];
  const noJobs = "Looks like you haven’t found any jobs at ___, when was the last time you looked at their careers page?";

  if (props.jobs) {
    jobList = 
    props.jobs.map((Obj) => {
      return <Job key={Obj._id} job={Obj} companyId={props.companyId} />;
    });
    if (jobList.length <= 0) {
      return noJobs
    }
  }
  return <div className="jobs-container">{jobList}</div>;

}

export default JobList;
