import React from "react";

import CompanyModel from "../../models/companyModel";
import CompanyList from "../../components/zApplicationDetails/Company/CompanyList";

class CompanyListCntr extends React.Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    console.log("COMPANY #4 hello from inside comp did mount");
    this.fetchData();
  }

  fetchData = () => {
    CompanyModel.getAllCompanies().then((data) => {
      console.log("COMPANY #5 this is the data fetched", data);
      this.setState({ companies: data });
    });
  };

  render() {
    console.log("COMPANY #1 and #2 hello in render", this.state.companies);
    return (
      <div>
        {/* <p>COMPANY hello in the paragraph</p> */}
        <CompanyList companies={this.state.companies}/>
      </div>
    );
  }
}

export default CompanyListCntr;
