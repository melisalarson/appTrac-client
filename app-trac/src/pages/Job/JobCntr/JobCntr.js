import React from "react";
import JobModel from "../../../models/jobModel";
import Job from "../../../components/zApplicationDetails/Job/Job";

class JobContainer extends React.Component {
  state = {
    job: {},
  };

  componentDidMount() {
        console.log(this.props, "from inside comp did mount -- Job");

    // JobModel.getJobById(this.props.match.params.id)
    //   .then((result) => {
    //     console.log(result);
    //     this.setState({ job: result });
    //   })
    //   .catch((err) => console.log(err));
  }

  render() {
    console.log("i am inside the render of job cntr");
    console.log(this.props);
    return <Job job={this.state.job} />;
  }
}

export default JobContainer;
