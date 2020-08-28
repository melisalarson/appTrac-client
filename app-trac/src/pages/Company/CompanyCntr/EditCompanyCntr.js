import React from "react";
import { withRouter } from "react-router-dom";
import CompanyModel from "../../../models/companyModel";


class EditCompanyCntr extends React.Component {
  state = {
    companyName: "",
    companyName: "",
    companyWebsite: "",
    companyCareersPage: "",
    companyLinkedin: "",
    employeeCount: 0,
    companyHQ: "",
    companyGlassdoor: "",
    glassdoorScore: 0,
  };
  
  componentDidMount() {
    CompanyModel.getCompanyById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .catch((err) => console.log(err));
  }

  handleChage = (event) => {
    console.log(event.target.id);
    if (event.target.value === "on") {
      event.target.value = true;
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    CompanyModel.updateCompany(this.state, this.props.match.params.id)
    .then((result) => {
      console.log(this.props);
      console.log(this.props.match.params.id)
      console.log(result);
    });
    this.props.history.goBack();
  };

  render() {
    const { companyName, companyWebsite, companyCareersPage, companyLinkedin, employeeCount, companyHQ, companyGlassdoor, glassdoorScore } = this.state;

    return (
      // <h1>hello from edit comp cntr</h1>
      <div className="new-company">
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Company</h2>
          <div>
            <label htmlFor="">Company</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="companyName"
              value={companyName}
            />
          </div>
          <div>
            <label htmlFor="">Company's Website</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyWebsite"
              value={companyWebsite}
            />
          </div>
          <div>
            <label htmlFor="">Careers Page</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyCareersPage"
              value={companyCareersPage}
            />
          </div>
          <div>
            <label htmlFor="">Company's Linkedin</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyLinkedin"
              value={companyLinkedin}
            />
          </div>
          <div>
            <label htmlFor="">Employees</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="employeeCount"
              value={employeeCount}
            />
          </div>
          <div>
            <label htmlFor="">HQ</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="companyHQ"
              value={companyHQ}
            />
          </div>
          <div>
            <label htmlFor="">Glassdoor</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyGlassdoor"
              value={companyGlassdoor}
            />
          </div>
          <div>
            <label htmlFor="">Glassdoor Score</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="glassdoorScore"
              value={glassdoorScore}
            />
          </div>
          <button className="buttons" id="add-company"  type="submit">
            Save{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditCompanyCntr);

