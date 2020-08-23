import React from "react";

import CompanyModel from "../../models/companyModel";
import CompanyList from "../../components/zApplicationDetails/Company/CompanyList";

class CompanyListCntr extends React.Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    console.log("#4 hello from inside comp did mount -- company");
    this.fetchData();
  }

  fetchData = () => {
    CompanyModel.getAllCompanies().then((data) => {
      console.log("#5 this is the data fetched -- company", data);
      this.setState({ companies: data });
    });
  };

  render() {
    console.log("#1 and #2 hello in render", this.state.companies);
    return (
      <div>
        <p>hello in the paragraph -- company</p>
        {/* <CompanyList companies={this.state.companies}/> */}
      </div>
    );
  }
}

export default CompanyListCntr;
