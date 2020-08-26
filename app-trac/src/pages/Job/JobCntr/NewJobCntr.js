import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import JobModel from "../../../models/jobModel";


class NewJobCntr extends React.Component {
  state = {
    applicationDate: Date(),
    applicationStatus: "",

    nextSteps: "",
    nextStepsDate: Date(),

    jobTitle: "",
    jobURL: "",
    jobLocation: "",
    jobDescription: "",

    jobNotes: "",
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
    JobModel.createJob(this.state).then((result) => {
      console.log(result);
    });
    this.props.history.goBack();
  };


  render() {
    return (
      <div className="new-job">
        <form onSubmit={this.handleSubmit}>
          <h2>Add A New Job</h2>
          <div>
            <label htmlFor="">Job Title</label>
            <input onInput={this.handleChage} type="text" name="jobTitle" />
          </div>
          <div>
            <label htmlFor="">Job Posting</label>
            <input onInput={this.handleChage} type="url" name="jobURL" />
          </div>
          <div>
            <label htmlFor="">Job Location</label>
            <input onInput={this.handleChage} type="text" name="jobLocation" />
          </div>
          <div>
            <label htmlFor="">Job Description</label>
            <input onInput={this.handleChage} type="text" name="jobDescription" />
          </div>
          <div>
            <label htmlFor="">Applied On </label>
            <input onInput={this.handleChage} type="date" name="applicationDate" />
          </div>
          <div>
            <label htmlFor="">Application Status</label>
            <select id="application-status" name="app-stat-list" form="app-stat-form">
              <option value="interested">Interested</option>
              <option value="applied">Applied</option>
              <option value="phone-creen">Phone Screen</option>
              <option value="phone-interview">Phone Interview</option>
              <option value="test-hW">Test/HW</option>
              <option value="in-person-zoom">In Person/Zoom</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
              <option value="no-openings">No Openings</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Next Steps</label>
            <select id="next-steps" name="next-steps-list" form="next-steps-form">
              <option value="review">Review Company/ Review Opportunities</option>
              <option value="prep-phone-screen"> Prepare For Phone Screen</option>
              <option value="prep-phone-intrview">Prepare For Phone Interview</option>
              <option value="comoplete-assignment">Complete Assignment</option>
              <option value="prep-interview">Prepare for Interview</option>
              <option value="accept-decline">Accept/Decline Offer</option>
              <option value="feedback">Ask For Feedback</option>
              <option value="none">None/ N/A</option>
            </select>
          </div>
          <div>
            <label htmlFor="">By</label>
            <input onInput={this.handleChage} type="date" name="nextStepsDate" />
          </div>
          <div>
            <label htmlFor="">Notes</label>
            <input onInput={this.handleChage} type="text" name="jobNotes" />
          </div>
          <button type="submit">Add Job</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewJobCntr);
