import React from "react";
import { withRouter } from "react-router-dom";
import CompanyModel from '../../../models/companyModel'
// import JobModel from "../../../models/jobModel";
// import ConnectionModel from "../../../models/jobModel";

import Company from '../../../components/zApplicationDetails/Company/Company'

class CompanyContainer extends React.Component {
  state = {
    company: {},
    job: [],
    connection: [],
  };

  componentDidMount() {
    // console.log(this.props, "from inside comp did mount -- Company");
    // console.log(this.props.match.params.id);
    CompanyModel.getCompanyById(this.props.match.params.id)
      .then((result) => {
        console.log(result, "THIS IS THE RESULT");

        // result.jobs.map((jobId) => {
        //   JobModel.getJobById(jobId).then((jobResult) => {
        //     this.setState({ job: [...this.state.job, jobResult] });
        //   });
        // });

        // result.connections.map((connectionId) => {
        //   // console.log(connectionId)
        //   ConnectionModel.getConnectionById(connectionId).then(
        //     (connectionResult) => {
        //       console.log(connectionResult, '***')
        //       this.setState({
        //         connection: [...this.state.connection, connectionResult],
        //       });
        //     });
        // });

        this.setState({
          company: result,
          job: result.jobs,
          connection: result.connections,
        });
      })
      .catch((err) => console.log(err));
  }


  render() {
    // console.log("i am inside the render of company cntr");
    // console.log(this.props);
    return (
      <Company
        company={this.state.company}
        job={this.state.job}
        connection={this.state.connection}
      />
    );
    // return <h1> this is the company container</h1>
  }
}

export default withRouter(CompanyContainer);


