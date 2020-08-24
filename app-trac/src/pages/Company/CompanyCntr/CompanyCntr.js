import React from "react";
import { withRouter } from "react-router-dom";
import CompanyModel from '../../../models/companyModel'
import Company from '../../../components/zApplicationDetails/Company/Company'

class CompanyContainer extends React.Component {
  state = {
    company: {},
  };

  componentDidMount() {
    console.log(this.props,"from inside comp did mount -- Company")
    CompanyModel.getCompanyById(this.props.match.params.id)
      .then((result) => {
        
        this.setState({ company: result });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("i am inside the render of company cntr");
    console.log(this.props);
    return <Company company={this.state.company} />;
    // return <h1> this is the company container</h1>
  }
}

export default withRouter(CompanyContainer);


