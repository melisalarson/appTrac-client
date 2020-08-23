import React from "react";

import JobModel from "../../models/JobModel";
import JobList from "../../components/zApplicationDetails/Job/JobList";

class JobListCntr extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    console.log("#4 hello from inside comp did mount -- job");
    this.fetchData();
  }

  fetchData = () => {
    JobModel.getAllJobs().then((data) => {
      console.log("#5 this is the data fetched -- job", data);
      this.setState({ jobs: data });
    });
  };

  render() {
    console.log("#1 and #2 hello in render -- job", this.state.jobs);
    return (
      <div>
        <p>hello in the paragraph -- job</p>
        {/* <JobList jobs={this.state.jobs}/> */}
      </div>
    );
  }
}

export default JobListCntr;
