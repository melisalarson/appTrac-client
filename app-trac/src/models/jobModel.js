const url = `http://localhost:4004/jobs`;


class JobModel {
  static getAllJobs = () => {
    return fetch(url).then((response) => response.json());
  };

  static getJobById = (jobId) => {
    return fetch(`${url}/${jobId}`).then((response) => response.json());
  };

  static createJob = (job) => {
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateJob = (job, jobId) => {
    return fetch(`${url}/${jobId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    }).then((response) => response.json());
  };
  
  static deleteJob = (jobId) => {
    return fetch(`${url}/${jobId}/delete`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
}


export default JobModel;
