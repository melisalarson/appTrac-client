import React from "react";

import JobModel from "../../../models/jobModel";

const JobDelete = (props) => {
  let goBack = () => props.history.goBack();
  let jobId = props.match.params.id;
  console.log(props)
  console.log(props.match.params.id);
  return (
    <div className="">
      Are you sure you want to delete this Job?
      <br />
      <button onClick={goBack}>Back</button>
      <button onClick={() => JobModel.deleteJob(jobId).then(goBack)}
      >Delete
      </button>
    </div>
  );
};

export default JobDelete;
