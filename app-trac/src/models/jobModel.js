const url = `http://localhost:4004/jobs`;


class JobModel {
  static getAllJobs = () => {
    return fetch(url).then((response) => response.json());
  };
}

export default JobModel;
