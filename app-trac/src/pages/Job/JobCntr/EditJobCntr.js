import React from "react";
import { withRouter } from "react-router-dom";
import JobModel from "../../../models/jobModel";


class EditJobCntr extends React.Component {
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

  componentDidMount() {
    JobModel.getJobById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    console.log(event.target.id);
    if (event.target.value === "on") {
      event.target.value = true;
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    JobModel.updateJob(this.state, this.props.match.params.id).then(
      (result) => {
        console.log(result);
      }
    );
    this.props.history.goBack();
  };

  render() {
    const { applicationDate, applicationStatus, nextSteps, nextStepsDate, jobTitle, jobURL,jobLocation, jobDescription, jobNotes } = this.state;
    return (
      <div className="new-job">
        <form onSubmit={this.handleSubmit}>
          <h2>Add A New Job</h2>
          <div>
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobTitle"
              value={jobTitle}
            />
          </div>
          <div>
            <label htmlFor="">Job Posting</label>
            <input
              onChange={this.handleChange}
              type="url"
              name="jobURL"
              value={jobURL}
            />
          </div>
          <div>
            <label htmlFor="">Job Location</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobLocation"
              value={jobLocation}
            />
          </div>
          <div>
            <label htmlFor="">Job Description</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobDescription"
              value={jobDescription}
            />
          </div>
          <div>
            <label htmlFor="">Applied On </label>
            <input
              onChange={this.handleChange}
              type="date"
              name="applicationDate"
              value={applicationDate}
            />
          </div>
          <div>
            <label htmlFor="">Application Status</label>
            <select
              id="application-status"
              name="app-stat-list"
              value={applicationStatus}
              form="app-stat-form"
            >
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
            <select
              id="next-steps"
              name="next-steps-list"
              value={nextSteps}
              form="next-steps-form"
            >
              <option value="review">
                Review Company/ Review Opportunities
              </option>
              <option value="prep-phone-screen">
                {" "}
                Prepare For Phone Screen
              </option>
              <option value="prep-phone-intrview">
                Prepare For Phone Interview
              </option>
              <option value="comoplete-assignment">Complete Assignment</option>
              <option value="prep-interview">Prepare for Interview</option>
              <option value="accept-decline">Accept/Decline Offer</option>
              <option value="feedback">Ask For Feedback</option>
              <option value="none">None/ N/A</option>
            </select>
          </div>
          <div>
            <label htmlFor="">By</label>
            <input
              onChange={this.handleChange}
              type="date"
              name="nextStepsDate"
              value={nextStepsDate}
            />
          </div>
          <div>
            <label htmlFor="">Notes</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobNotes"
              value={jobNotes}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditJobCntr);
