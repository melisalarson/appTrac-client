const url = `http://localhost:4004/companies`;


class CompanyModel {
  static getAllCompanies = () => {
    return fetch(url).then((response) => response.json());
  };

  static getCompanyById = (companyId) => {
    return fetch(`${url}/${companyId}`).then((response) => response.json());
  };

  static createCompany = (companyId) => {
    return fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateCompany = (companyId) => {
    return fetch(`${url}/${companyId}`, {
      method: "PUT",
    }).then((response) => response.json());
  };

  static deleteCompany = (companyId) => {
    return fetch(`${url}/${companyId}/delete`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
}

export default CompanyModel;
