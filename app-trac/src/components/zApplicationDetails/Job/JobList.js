import React from "react";
import Job from "./Job";


function JobList(props) {
  // let jobList = <div>props.jobs</div>;
  let jobList = props.jobs.map((Obj) => {
    return <Job key={Obj._id} jobs={Obj}/>;
  });
  console.log("#3 Obj from jobList.js = ", jobList);

  return <div className="jobs-container">{jobList}</div>;
}

export default JobList;
