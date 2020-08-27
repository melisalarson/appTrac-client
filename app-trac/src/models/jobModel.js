const url = `https://app-trac-m.herokuapp.com/companies`;



class JobModel {
  // static getAllJobs = () => {
  //   return fetch(url).then((response) => response.json());
  // };

  static getJobById = (companyId, jobId) => {
    console.log(companyId)
    return fetch(`${url}/${companyId}/jobs/${jobId}`).then((response) => response.json());
  };

  static createJob = (companyId, job) => {
    console.log(companyId)
    return fetch(`${url}/${companyId}/jobs`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateJob = (companyId, job, jobId) => {
    console.log(companyId)
    return fetch(`${url}/${companyId}/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    }).then((response) => response.json());
  };
  
  static deleteJob = (jobId) => {
    return fetch(`${url}/jobs/${jobId}/delete`, {
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
