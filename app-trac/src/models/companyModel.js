const deploy = `https://app-trac-m.herokuapp.com/companies`
const local = `http://localhost:4004/companies`;
const url = local;
// const url = deploy;

class CompanyModel {
  static getAllCompanies = () => {
    return fetch(url).then((response) => response.json());
  };

  static getCompanyById = (companyId) => {
    return fetch(`${url}/${companyId}`)
    .then((response) => response.json());
  };

  static createCompany = (company) => {
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company)
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateCompany = (company, companyId) => {
    return fetch(`${url}/${companyId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company)
    }).then((response) => response.json());
  };

  static deleteCompany = (companyId) => {
    return fetch(`${url}/${companyId}/delete`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
}

export default CompanyModel;
