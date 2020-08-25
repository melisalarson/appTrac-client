const url = `http://localhost:4004/jobs`;


class JobModel {
  static getAllJobs = () => {
    return fetch(url).then((response) => response.json());
  };

  static getJobById = (jobId) => {
    return fetch(`${url}/${jobId}`).then((response) => response.json());
  };

  static createJob = (jobId) => {
    return fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateJob = (jobId) => {
    return fetch(`${url}/${jobId}`, {
      method: "PUT",
    }).then((response) => response.json());
  };
  
  static deleteJob = (jobId) => {
    return fetch(`${url}/${jobId}/delete`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
}


export default JobModel;
