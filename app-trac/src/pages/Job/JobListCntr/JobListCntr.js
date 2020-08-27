import React from "react";

import JobModel from "../../../models/jobModel";
import JobList from "../../../components/zApplicationDetails/Job/JobList";

class JobListCntr extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    // console.log("JOB #4 hello from inside comp did mount");
    this.fetchData();
  }

  fetchData = () => {
    JobModel.getAllJobs().then((data) => {
      // console.log("JOB #5 this is the data fetched", data);
      this.setState({ jobs: data });
    });
  };

  render() {
    // console.log("JOB #1 and #2 hello in render", this.state.jobs);
    return (
      <div>
        {/* <p>JOB hello in the paragraph</p> */}
        <JobList jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default JobListCntr;
