import React from "react";
import Job from "./Job";


function JobList(props) {
  let jobList=[];
  const noJobs = "Looks like you haven’t found any jobs at ___, when was the last time you looked at their careers page?";

  // if (props.jobs) {
  //   jobList = 
  //   props.jobs.map((Obj) => {
  //     return <Job key={Obj._id} job={Obj} />;
  //   });
  // }
  // return <div className="jobs-container">{jobList}</div>;

  if (props.jobs.length > 0) {
    if (props.jobs) {
      jobList = props.jobs.map((Obj) => {
        return <Job key={Obj._id} job={Obj} />;
      });
    }
  return <div className="jobs-container">{jobList}</div>;
  } else if (props.jobs.length <= 0) {
    return noJobs;
  }

}

export default JobList;
