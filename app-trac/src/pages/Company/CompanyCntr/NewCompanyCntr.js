import React from "react";
import { withRouter } from "react-router-dom";
import CompanyModel from "../../../models/companyModel";


class NewCompanyCntr extends React.Component {
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

  handleChage = (event) => {
    console.log(event.target.id);
    if (event.target.value === "on") {
      event.target.value = true;
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props, "this is props")
    CompanyModel.createCompany(this.state)
      .then((result) => {
        console.log(result, "this is the resulttttttttttttt");
        this.props.history.push(`/companies/${result._id}`)
        // this.props.history.goBack();
      });
  };


  render() {
    
    return (
      <div className="new-company">
        <form onSubmit={this.handleSubmit}>
          <h2>Add A New Company</h2>
          <div>
            <label htmlFor="">Company</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="companyName"
            />
          </div>
          <div>
            <label htmlFor="">Company's Website</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyWebsite"
            />
          </div>
          <div>
            <label htmlFor="">Careers Page</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyCareersPage"
            />
          </div>
          <div>
            <label htmlFor="">Company's Linkedin</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyLinkedin"
            />
          </div>
          <div>
            <label htmlFor="">Employees</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="employeeCount"
            />
          </div>
          <div>
            <label htmlFor="">HQ</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="companyHQ"
            />
          </div>
          <div>
            <label htmlFor="">Glassdoor</label>
            <input
              onChange={this.handleChage}
              type="url"
              name="companyGlassdoor"
            />
          </div>
          <div>
            <label htmlFor="">Glassdoor Score</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="glassdoorScore"
            />
          </div>
          <button className="buttons" type="submit" id="add-company">Add Company</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewCompanyCntr);
